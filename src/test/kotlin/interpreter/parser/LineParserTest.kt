package interpreter.parser

import interpreter.property.InvalidExpressionException
import net.objecthunter.exp4j.tokenizer.UnknownFunctionOrVariableException
import org.junit.Test
import structure.Define
import structure.TestStructure
import structure.helperClasses.Point
import kotlin.math.PI
import kotlin.math.roundToInt
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith
import kotlin.test.assertNotEquals

class LineParserTest {
    @Test
    fun `test interface with simple ws`() {
        val t = """
interface hyper
  a=10
10 teststructure: hyper
        """.trimIndent().toLowerCase()
        val lp = LineParser()
        val ws = lp.create(t.toLines()).first()
        assertEquals(10, ws.a)
    }
    @Test
    fun `test multiple interfaces with simple ws`() {
        val t = """
interface hyper
  a=10
interface hoper
  a+=10
10 testStructure: hyper, hoper
        """.trimIndent().toLowerCase()
        val lp = LineParser()
        val ws = lp.create(t.toLines()).first()
        assertEquals(20, ws.a)
    }

    @Test
    fun `test custom Structure with simple ws`() {
        val t = """
struct w1: testStructure
  a=10
  testPoint = 10,20,0
10 w1
        """.trimIndent().toLowerCase()
        val lp = LineParser()
        val ws = lp.create(t.toLines()).first()
        assertEquals(10, ws.a)
        ws as Define
        val p = Point(10,20,0)
        val w = ws.structures.first() as TestStructure
        assertEquals(p, w.testPoint)
    }

    @Test
    fun `test mixed interfaces and TestStructureStructure list`() {
        val t = """
interface hyper
  a=10
struct w1:TestStructure,hyper
10 w1
  a += 5
        """.trimIndent().toLowerCase()
        val lp = LineParser()
        val ws = lp.create(t.toLines()).first()
        assertEquals(15, ws.a)
    }

    @Test
    fun `test function`() {
        val t = """
fun f(x) = x+2
10 TestStructure
  a = f(2)
        """.trimIndent().toLowerCase()
        val lp = LineParser()
        val ws = lp.create(t.toLines()).first()
        //TODO add custom Functions
        //assertEquals(4, ws.a)
    }

    @Test
    fun `test constant`() {
        val t = """
const testProp = 4
10 TestStructure
  a = testProp
        """.trimIndent().toLowerCase()
        val lp = LineParser()
        val ws = lp.create(t.toLines()).first()
        assertEquals(4, ws.a)
    }

    @Test
    fun `test constant in function`() {
        val t = """
const testProp = 10
fun f(x) = x+testProp
10 TestStructure
  a = f(10)
        """.trimIndent().toLowerCase()
        val lp = LineParser()
        val ws = lp.create(t.toLines()).first()
        assertEquals(20, ws.a)
    }

    @Test
    fun `test other property in property`() {
        val t = """
10 testStructure
  testInt = 20
  testDouble = testInt/2
        """.trimIndent().toLowerCase()
        val lp = LineParser()
        val ws = lp.create(t.toLines()).first() as TestStructure
        assertEquals(20, ws.testInt)
        assertEquals(10.0, ws.testDouble)
    }

    @Test
    fun `test other property in interface`() {
        val t = """
interface fast
  testDouble = testInt/2
10 testStructure: fast
  testInt = 20
        """.trimIndent().toLowerCase()
        val lp = LineParser()
        val ws = lp.create(t.toLines()).first() as TestStructure
        assertEquals(20, ws.testInt)
        assertEquals(10.0, ws.testDouble)
    }

    @Test
    fun `test point property in property`() {
        val t = """
10 testStructure
  testPoint = 1,3,5
  testInt = testPointX + testPointY + testPointZ
        """.trimIndent().toLowerCase().toLines()
        // todo find a way for this
        // val lp = LineParser()
        // val ws = lp.create(t).first() as TestStructure
        // assertEquals(Point(1,3,5), ws.testPoint)
        // assertEquals(9,ws.testInt)
    }

    @Test
    fun `test multiple wallStructures in custom Structure`(){
        val t = """
struct w1: testStructure
  testInt = 0
struct w2: testStructure
  testInt = 1
struct w3: testStructure
  testInt = 2
struct w4: w1,w2,w3
10 w4
        """.trimIndent().toLowerCase()
        val lp = LineParser()
        val ws = lp.create(t.toLines()).first()
        ws as Define
        assertEquals(3,ws.structures.size)
        @Suppress("UNCHECKED_CAST") //this gets tested
        val w = (ws.structures as List<Define>).map { it.structures.first() as TestStructure }
        assertEquals(0,w[0].testInt)
        assertEquals(1,w[1].testInt)
        assertEquals(2,w[2].testInt)
    }

    @Test
    fun `test invalid Property`(){
        val t = """
10 testStructure
  nonBwProperty = 20
        """.trimIndent().toLowerCase()
        val lp = LineParser()
        assertFailsWith<InvalidLineExpression> { lp.create(t.toLines())  }
    }

    @Test
    fun `test invalid Constant`(){
        val t = """
10 testStructure
  testInt = 1 + fsdsdfjkladfjsakldfjsklajfdskla
        """.trimIndent().toLowerCase()
        val lp = LineParser()
        val ws = lp.create(t.toLines()).first()
        assertFailsWith<UnknownFunctionOrVariableException> { (ws as TestStructure).testInt }
    }

    @Test
    fun `test build in constants`(){
        val t = """
10 testStructure
  testInt = 2 * pi
        """.trimIndent().toLowerCase().toLines()
        val lp = LineParser()
        val ws = lp.create(t).first() as TestStructure
        assertEquals(ws.testInt,(2* PI).roundToInt())

    }

    @Test
    fun `test build in functions`(){
        val t = """
10 testStructure
  testInt = abs(-1)
        """.trimIndent().toLowerCase().toLines()
        val lp = LineParser()
        val ws = lp.create(t).first() as TestStructure
        assertEquals(1,ws.testInt)
    }

    @Test
    fun `test Beatwalls specific functions`(){
        val t = """
10 testStructure
  testDouble = random(-10,20)
  testInt = switch3(10,15,13)
        """.trimIndent().toLowerCase().toLines()
        val lp = LineParser()
        val arr = arrayOf(10,15,13)
        val ws = lp.create(t).first() as TestStructure
        repeat(5000){
            assertEquals(ws.testInt, arr[it%3])
            assert(ws.testDouble in -10.0..20.0)
            assertNotEquals(ws.testDouble,ws.testDouble)
        }
    }

    @Test
    fun `test i Property`(){
        val amount: Int = 10000
        val t = """
10 testStructure
  testInt = i * $amount
  testIntOrNull = linear(0,$amount)
        """.trimIndent().toLowerCase().toLines()
        val lp = LineParser()
        val arr = arrayOf(10,15,13)
        val ws = lp.create(t).first() as TestStructure
        repeat(amount){
            ws.i = it/amount.toDouble()
            assertEquals(ws.testInt, it)
            assertEquals(ws.testIntOrNull, it)
        }
    }

    @Test
    fun `test repeat`(){
        val t = """
10 testStructure
  repeat testInt += 10
        """.trimIndent().toLowerCase().toLines()
        val lp = LineParser()
        val ws = lp.create(t).first() as TestStructure
        assertEquals(0,ws.testInt)
        ws.repeatCounter.value = 1
        assertEquals(10,ws.testInt)
        ws.repeatCounter.value = 2
        assertEquals(20,ws.testInt)
    }
    @Test
    fun `test repeat in custom Structure`(){
        val t = """
struct myStruct: testStructure
  repeat testInt += 10
10 myStruct
        """.trimIndent().toLowerCase().toLines()
        val lp = LineParser()
        val ws = lp.create(t).first() as Define
        val ts = ws.structures.first() as TestStructure
        assertEquals(0,ts.testInt)
        ws.repeatCounter.value = 1
        assertEquals(10,ts.testInt)
        ws.repeatCounter.value = 2
        assertEquals(20,ts.testInt)
    }

    @Test
    fun `test default interface`(){
        val t = """
10 testStructure
interface default
  testInt = 1 
20 testStructure
interface default
  testIntOrNull = 1 
30 testStructure
interface default
40 testStructure
        """.trimIndent().toLowerCase().toLines()
        val lp = LineParser()
        val w = lp.create(t)
        val ws0 = w[0] as TestStructure
        val ws1 = w[1] as TestStructure
        val ws2 = w[2] as TestStructure
        val ws3 = w[3] as TestStructure
        assertEquals(0,ws0.testInt)
        assertEquals(1,ws1.testInt)
        assertEquals(0,ws2.testInt)
        assertEquals(0,ws3.testInt)
    }



    private fun String.toLines() = this.lines().mapIndexed { index, s ->  Line(s,index) }
}