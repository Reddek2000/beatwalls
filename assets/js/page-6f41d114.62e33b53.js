(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{599:function(t,e,r){"use strict";r.r(e);var o=r(26),l=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("RouterLink",{attrs:{to:"/"}},[t._v("beatwalls")]),t._v(" / "),r("RouterLink",{attrs:{to:"/reference/"}},[t._v("structure")]),t._v(" / "),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[t._v("WallStructure")])],1),t._v(" "),r("h1",{attrs:{id:"wallstructure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wallstructure"}},[t._v("#")]),t._v(" WallStructure")]),t._v(" "),r("p",[r("code",[t._v("sealed class WallStructure : Serializable")])]),t._v(" "),r("h3",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Summary")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/a.html"}},[t._v("a")])],1),t._v(" "),r("td",[t._v("This is needed for all the functions and properties. This allows for the use of other bwProperties in the expressions"),r("code",[t._v("open val a: Int")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/active-wall.html"}},[t._v("activeWall")])],1),t._v(" "),r("td",[r("code",[t._v("var activeWall:")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/beat.html"}},[t._v("beat")])],1),t._v(" "),r("td",[t._v("dont touch"),r("code",[t._v("var beat: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/bombs.html"}},[t._v("bombs")])],1),t._v(" "),r("td",[t._v("turns the entire WallStructure into bombs. only available, if deleteAllPrevious is set."),r("code",[t._v("val bombs: Boolean")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/color.html"}},[t._v("color")])],1),t._v(" "),r("td",[t._v("The Color of the Wallstructure. Click me to see examples"),r("code",[t._v("val color:")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-color/"}},[r("code",[t._v("Color")])]),r("code",[t._v("?")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/duration.html"}},[t._v("duration")])],1),t._v(" "),r("td",[t._v("change The Duration of all Walls in the structure to the given Value. Random possible with random(min,max). Default: null"),r("code",[t._v("val duration: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/fit-duration.html"}},[t._v("fitDuration")])],1),t._v(" "),r("td",[t._v("increases or decreases the StartTime of all walls until they have the the specific duration. Random possible with random(min,max). default: null (does nothing)"),r("code",[t._v("val fitDuration: Double?")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/fit-height.html"}},[t._v("fitHeight")])],1),t._v(" "),r("td",[t._v("increases or decreases the y of all walls until they have the the specific Height. Random possible with random(min,max). default: null (does nothing)"),r("code",[t._v("val fitHeight: Double?")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/fit-width.html"}},[t._v("fitWidth")])],1),t._v(" "),r("td",[t._v("increases or decreases the x of all walls until they have the the specific Width. Random possible with random(min,max). default: null (does nothing)"),r("code",[t._v("val fitWidth: Double?")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/fit-x.html"}},[t._v("fitX")])],1),t._v(" "),r("td",[t._v("increases or decreases the width of all walls until they have the the specific X. Random possible with random(min,max). default: null (does nothing)"),r("code",[t._v("val fitX: Double?")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/fit-y.html"}},[t._v("fitY")])],1),t._v(" "),r("td",[t._v("increases or decreases the height of all walls until they have the the specific y. Random possible with random(min,max). default: null (does nothing)"),r("code",[t._v("val fitY: Double?")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/fit-z.html"}},[t._v("fitZ")])],1),t._v(" "),r("td",[t._v("increases or decreases the duration of all walls until they have the the specific startTime. Random possible with random(min,max). default: null (does nothing)"),r("code",[t._v("val fitZ: Double?")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/height.html"}},[t._v("height")])],1),t._v(" "),r("td",[t._v("change The Height of all Walls in the structure to the given Value. Random possible with random(min,max). Default: null"),r("code",[t._v("val height: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/i.html"}},[t._v("i")])],1),t._v(" "),r("td",[r("code",[t._v("var i: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/local-rot-x.html"}},[t._v("localRotX")])],1),t._v(" "),r("td",[t._v("localRotX controls the rotationY on the x-axis for each individual wall in degree. allows random. Default: 0"),r("code",[t._v("val localRotX: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/local-rot-y.html"}},[t._v("localRotY")])],1),t._v(" "),r("td",[t._v("localRotY controls the rotationY on the y-axis for each individual Wall in degree. allows random. Default: 0"),r("code",[t._v("val localRotY: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/local-rot-z.html"}},[t._v("localRotZ")])],1),t._v(" "),r("td",[r("ul",[r("li",[t._v("localRotZ controls the rotationY on the x-axis for each individual Wall in degree. allows random. Default: 0")])]),r("code",[t._v("val localRotZ: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/mirror.html"}},[t._v("mirror")])],1),t._v(" "),r("td",[t._v("mirrors the SpookyWall. Default: 0. click me:"),r("code",[t._v("val mirror: Int")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/mirror-rotation.html"}},[t._v("mirrorRotation")])],1),t._v(" "),r("td",[t._v("Defines, if mirror also effects the rotationY. Can be true or false. Default: true"),r("code",[t._v("val mirrorRotation: Boolean")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/mirror-x.html"}},[t._v("mirrorX")])],1),t._v(" "),r("td",[t._v("The x Position used for mirror. Default: 0"),r("code",[t._v("val mirrorX: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/mirror-y.html"}},[t._v("mirrorY")])],1),t._v(" "),r("td",[t._v("The y Position used for mirror. Default: 2"),r("code",[t._v("val mirrorY: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/note-jump-movement-speed.html"}},[t._v("noteJumpMovementSpeed")])],1),t._v(" "),r("td",[t._v("I have no idea, ask cyan"),r("code",[t._v("val noteJumpMovementSpeed: Double?")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/note-jump-movement-speed-offset.html"}},[t._v("noteJumpMovementSpeedOffset")])],1),t._v(" "),r("td",[t._v("I have no idea, ask cyan"),r("code",[t._v("val noteJumpMovementSpeedOffset: Double?")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/r.html"}},[t._v("r")])],1),t._v(" "),r("td",[r("code",[t._v("val r: Random")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/repeat.html"}},[t._v("repeat")])],1),t._v(" "),r("td",[t._v("how often you want to repeat the Structure."),r("code",[t._v("val repeat: Int")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/repeat-counter.html"}},[t._v("repeatCounter")])],1),t._v(" "),r("td",[r("code",[t._v("var repeatCounter:")]),r("RouterLink",{attrs:{to:"/interpreter.property.special-properties/-repeat-counter/"}},[r("code",[t._v("RepeatCounter")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/reverse.html"}},[t._v("reverse")])],1),t._v(" "),r("td",[t._v("reverses the WallStructure on the Starttime/duration"),r("code",[t._v("val reverse: Boolean")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/reverse-x.html"}},[t._v("reverseX")])],1),t._v(" "),r("td",[t._v("basically mirrors the Wallstructure in itself on the x-Achsis if set to true"),r("code",[t._v("val reverseX: Boolean")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/reverse-y.html"}},[t._v("reverseY")])],1),t._v(" "),r("td",[t._v("basically mirrors the Wallstructure in itself on the x-Achsis if set to true"),r("code",[t._v("val reverseY: Boolean")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/rotation-x.html"}},[t._v("rotationX")])],1),t._v(" "),r("td",[t._v("The rotationY of the track of this wallstructure around the player on the X-Axis, think walls coming from the ground/sky Other interesting Properties: mirrorRotation -> controls if mirror also effects the rotationY(true,false)"),r("code",[t._v("val rotationX: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/rotation-y.html"}},[t._v("rotationY")])],1),t._v(" "),r("td",[t._v("The rotationY of the track of this wallstructure around the player on the y-Axis, think 360 maps. Other interesting Properties: mirrorRotation -> controls if mirror also effects the rotationY(true,false)"),r("code",[t._v("val rotationY: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/rotation-z.html"}},[t._v("rotationZ")])],1),t._v(" "),r("td",[t._v("The rotationY of the track of this wallstructure around the player on the z-Axis, not used much.. Other interesting Properties: mirrorRotation -> controls if mirror also effects the rotationY(true,false)"),r("code",[t._v("val rotationZ: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/scale-x.html"}},[t._v("scaleX")])],1),t._v(" "),r("td",[t._v("scales both X and Width at the same time."),r("code",[t._v("val scaleX: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/scale-y.html"}},[t._v("scaleY")])],1),t._v(" "),r("td",[t._v("scales both Y and Height at the same time."),r("code",[t._v("val scaleY: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/scale-z.html"}},[t._v("scaleZ")])],1),t._v(" "),r("td",[t._v("scales both Z and duration at the same time. the Duration only gets scaled, if it is positive. This is useful for stretching out Wallstructures over a wider section"),r("code",[t._v("val scaleZ: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/seed.html"}},[t._v("seed")])],1),t._v(" "),r("td",[t._v("some Wallstructures use Random walls. This is the seed for them"),r("code",[t._v("val seed: Int?")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/speeder.html"}},[t._v("speeder")])],1),t._v(" "),r("td",[t._v("speeds up the wallstructure over time. the duration of the whole structure. Remains. \\n"),r("code",[t._v("val speeder: Double?")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/time-to-njs-offset.html"}},[t._v("timeToNjsOffset")])],1),t._v(" "),r("td",[t._v("times the SpookyWall by adding the njsOffset, default: true"),r("code",[t._v("val timeToNjsOffset: Boolean")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/track.html"}},[t._v("track")])],1),t._v(" "),r("td",[t._v("todo used for some internal stuff, dont touch"),r("code",[t._v("val track: String?")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/variables.html"}},[t._v("variables")])],1),t._v(" "),r("td",[r("code",[t._v("var variables: HashMap<String, Double>")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/width.html"}},[t._v("width")])],1),t._v(" "),r("td",[t._v("change the Width of all Walls in the structure to the given Value. Random possible with random(min,max). Default: null"),r("code",[t._v("val width: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/x.html"}},[t._v("x")])],1),t._v(" "),r("td",[t._v("change The x of all Walls in the structure to the given Value. Random possible with random(min,max). Default: null"),r("code",[t._v("val x: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/y.html"}},[t._v("y")])],1),t._v(" "),r("td",[t._v("change The y of all Walls in the structure to the given Value. Random possible with random(min,max). Default: null"),r("code",[t._v("val y: Double")])])]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/z.html"}},[t._v("z")])],1),t._v(" "),r("td",[t._v("change The StartTime of all Walls in the structure to the given Value. Random possible with random(min,max). Default: null"),r("code",[t._v("val z: Double")])])])])]),t._v(" "),r("h3",{attrs:{id:"functions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Summary")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/generate-walls.html"}},[t._v("generateWalls")])],1),t._v(" "),r("td",[t._v("generates the walls"),r("code",[t._v("abstract fun generateWalls(): List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/name.html"}},[t._v("name")])],1),t._v(" "),r("td",[t._v("returns the name of the structure"),r("code",[t._v("open fun name(): String")])])])])]),t._v(" "),r("h3",{attrs:{id:"companion-object-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#companion-object-properties"}},[t._v("#")]),t._v(" Companion Object Properties")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Summary")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/color.html"}},[t._v("color")])],1),t._v(" "),r("td",[r("code",[t._v("var color:")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-color-mode/"}},[r("code",[t._v("ColorMode")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/track.html"}},[t._v("track")])],1),t._v(" "),r("td",[r("code",[t._v("var track: String?")])])])])]),t._v(" "),r("h3",{attrs:{id:"extension-functions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#extension-functions"}},[t._v("#")]),t._v(" Extension Functions")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Summary")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/bend-walls.html"}},[t._v("bendWalls")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".bendWalls(walls: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/copy-walls.html"}},[t._v("copyWalls")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".copyWalls(): ArrayList<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/deep-copy.html"}},[t._v("deepCopy")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".deepCopy():")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/interpreter.parser.types/del-of-prop-name.html"}},[t._v("delOfPropName")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".delOfPropName(name: String):")]),r("RouterLink",{attrs:{to:"/interpreter.property/-bw-property/"}},[r("code",[t._v("BwProperty")])]),r("code",[t._v("?")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/extra-stuff.html"}},[t._v("extraStuff")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".extraStuff(l: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): Unit")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/generate-bend-and-repeat-walls.html"}},[t._v("generateBendAndRepeatWalls")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".generateBendAndRepeatWalls(): List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/mirror.html"}},[t._v("mirror")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".mirror(origin: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): MutableList<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/mirror-x.html"}},[t._v("mirrorX")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".mirrorX(w: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/mirror-y.html"}},[t._v("mirrorY")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".mirrorY(w: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/interpreter.parser.types/prop-of-name.html"}},[t._v("propOfName")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".propOfName(name: String): Pair<KProperty1<out")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(", Any?>?, Any?>")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.special-strucures/read-point.html"}},[t._v("readPoint")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".readPoint(name: String):")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-point/"}},[r("code",[t._v("Point")])]),r("code",[t._v("?")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/repeat-struct.html"}},[t._v("repeatStruct")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".repeatStruct(walls: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.helper-functions/reset.html"}},[t._v("reset")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".reset(): Unit")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/reverse-x.html"}},[t._v("reverseX")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".reverseX(l: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): Unit")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/reverse-y.html"}},[t._v("reverseY")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".reverseY(l: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): Unit")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/rotate.html"}},[t._v("rotate")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".rotate(l: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): Unit")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/structure.wallbender/speeder.html"}},[t._v("speeder")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".speeder(l: List<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">): Unit")])],1)])])]),t._v(" "),r("h3",{attrs:{id:"inheritors"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#inheritors"}},[t._v("#")]),t._v(" Inheritors")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Summary")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-continuous-curve/"}},[t._v("ContinuousCurve")])],1),t._v(" "),r("td",[t._v("Creates a continues line with up to 31 Points. this one does not have a typo in the name 😃"),r("code",[t._v("class ContinuousCurve :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-curve/"}},[t._v("Curve")])],1),t._v(" "),r("td",[t._v("Draw a curve of Walls. This uses BezierCurve. You can imagine it like a line between point 1 and point 4, that gets pulled upon by the controlpoints. Maybe this link can help (the dots are the Points) https://www.desmos.com/calculator/cahqdxeshd"),r("code",[t._v("class Curve :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-define/"}},[t._v("Define")])],1),t._v(" "),r("td",[t._v("Define your own WallStructure from existing WallStructures."),r("code",[t._v("class Define :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-empty-wall-structure/"}},[t._v("EmptyWallStructure")])],1),t._v(" "),r("td",[t._v("dont touch todo remove"),r("code",[t._v("class EmptyWallStructure :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-furry-grid/"}},[t._v("FurryGrid")])],1),t._v(" "),r("td",[t._v("3d Grid"),r("code",[t._v("class FurryGrid :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-helix/"}},[t._v("Helix")])],1),t._v(" "),r("td",[t._v("spinning time! make walls spin around the player Also check out noodlehelix, its propably better."),r("code",[t._v("class Helix :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-line/"}},[t._v("Line")])],1),t._v(" "),r("td",[t._v("Draws a wall of line between the 2 provided Points"),r("code",[t._v("class Line :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-noodle-helix/"}},[t._v("NoodleHelix")])],1),t._v(" "),r("td",[r("code",[t._v("class NoodleHelix :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-random-cuboid-lines/"}},[t._v("RandomCuboidLines")])],1),t._v(" "),r("td",[t._v("draws multiple lines around Sections of the cuboid."),r("code",[t._v("class RandomCuboidLines :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-random-curve/"}},[t._v("RandomCurve")])],1),t._v(" "),r("td",[t._v("random curves in a given cubic. Always starts at p1 and ends at p2."),r("code",[t._v("class RandomCurve :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-random-noise/"}},[t._v("RandomNoise")])],1),t._v(" "),r("td",[t._v("Random Noise (small mini cubes)"),r("code",[t._v("class RandomNoise :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-random-structures/"}},[t._v("RandomStructures")])],1),t._v(" "),r("td",[t._v("Define your own WallStructure from existing WallStructures."),r("code",[t._v("class RandomStructures :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-raw-ws/"}},[t._v("RawWs")])],1),t._v(" "),r("td",[t._v("Use a json Array of NE Walls and have them be an WallStructure"),r("code",[t._v("class RawWs :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-steady-curve/"}},[t._v("SteadyCurve")])],1),t._v(" "),r("td",[t._v("Draw a steady curve of Walls. that is exactly 1 beat long"),r("code",[t._v("class SteadyCurve :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-test-structure/"}},[t._v("TestStructure")])],1),t._v(" "),r("td",[t._v("This Structure is used for internal testing does not do anything for you"),r("code",[t._v("class TestStructure :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall/"}},[t._v("Wall")])],1),t._v(" "),r("td",[t._v("create a single Wall between to points"),r("code",[t._v("class Wall :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)])])])])}),[],!1,null,null,null);e.default=l.exports}}]);