package structure.helperClasses

import chart.difficulty._obstacleCustomData
import chart.difficulty._obstacles
import org.junit.Assert.assertEquals
import org.junit.Test

class SpookyWallTest {
    @Test
    fun standardToValidWall(){
        val expected = SpookyWall(
            startRow = 1.0,
            duration = 1.0,
            width = 1.0,
            height = 1.0,
            startHeight = 1.0,
            startTime = 1.0,
            color = red
        )
        val actual = expected.toValidWall(2.0)
        assertEquals(expected,actual)
    }

    @Test
    fun negativeToValidWall(){
        val w = SpookyWall(
            startRow = -1.0,
            duration = -5.0,
            width = -1.0,
            height = -1.0,
            startHeight = -1.0,
            startTime = 1.0,
            color = blue
        )
        val expected = SpookyWall(
            startRow = -2.0,
            duration = -3.0,
            width = 1.0,
            height = 1.0,
            startHeight = -2.0,
            startTime = 1.0,
            color = blue
        )
        val actual = w.toValidWall(2.0)
        assertEquals(expected,actual)
    }
    @Test
    fun weirdToValidWall(){
        val w = SpookyWall(
            startRow = 0.0,
            duration = 0.0,
            width = 0.0,
            height = 0.0,
            startHeight = 0.0,
            startTime = -1.0,
            color = blue
        )
        val expected = SpookyWall(
            startRow = 0.0,
            duration = 0.0001,
            width = minValue,
            height = minValue,
            startHeight = 0.0,
            startTime = minValue,
            color = blue
        )
        val actual = w.toValidWall(2.0)
        assertEquals(expected,actual)
    }

    @Test
    fun to_obstacle() {
        val w = SpookyWall(
            startRow = 0.0,
            duration = 0.0,
            width = 0.0,
            height = 0.0,
            startHeight = 0.0,
            startTime = 1.0,
            color = null

        )
        val actual = w.to_obstacle(2.0)
        val expected = _obstacles(
            _time = 1.0F,
            _lineIndex =  3000,
            _type = 5001,
            _duration = 1.0E-4F,
            _width = 1005,
            _obstacleCustomData = _obstacleCustomData(
                _startRow = 0.0,
                _startHeight = 0.0,
                _width = 0.005,
                _height = 0.005,
                _color = null,
                track = null
            )
        )
        assertEquals(expected, actual)

    }
}