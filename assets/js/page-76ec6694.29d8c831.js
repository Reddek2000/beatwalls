(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{641:function(t,e,r){"use strict";r.r(e);var o=r(26),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("RouterLink",{attrs:{to:"/"}},[t._v("beatwalls")]),t._v(" / "),r("RouterLink",{attrs:{to:"/reference/"}},[t._v("structure")])],1),t._v(" "),r("h2",{attrs:{id:"package-structure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#package-structure"}},[t._v("#")]),t._v(" Package structure")]),t._v(" "),r("h3",{attrs:{id:"types"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#types"}},[t._v("#")]),t._v(" Types")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Summary")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-continuous-curve/"}},[t._v("ContinuousCurve")])],1),t._v(" "),r("td",[t._v("Creates a continues line with up to 31 Points. this one does not have a typo in the name 😃"),r("code",[t._v("class ContinuousCurve :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-curve/"}},[t._v("Curve")])],1),t._v(" "),r("td",[t._v("Draw a curve of Walls. This uses BezierCurve. You can imagine it like a line between point 1 and point 4, that gets pulled upon by the controlpoints. Maybe this link can help (the dots are the Points) https://www.desmos.com/calculator/cahqdxeshd"),r("code",[t._v("class Curve :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-define/"}},[t._v("Define")])],1),t._v(" "),r("td",[t._v("Define your own WallStructure from existing WallStructures."),r("code",[t._v("class Define :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-empty-wall-structure/"}},[t._v("EmptyWallStructure")])],1),t._v(" "),r("td",[t._v("dont touch todo remove"),r("code",[t._v("class EmptyWallStructure :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-furry-grid/"}},[t._v("FurryGrid")])],1),t._v(" "),r("td",[t._v("3d Grid"),r("code",[t._v("class FurryGrid :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-helix/"}},[t._v("Helix")])],1),t._v(" "),r("td",[t._v("spinning time! make walls spin around the player Also check out noodlehelix, its propably better."),r("code",[t._v("class Helix :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-line/"}},[t._v("Line")])],1),t._v(" "),r("td",[t._v("Draws a wall of line between the 2 provided Points"),r("code",[t._v("class Line :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-noodle-helix/"}},[t._v("NoodleHelix")])],1),t._v(" "),r("td",[r("code",[t._v("class NoodleHelix :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-random-cuboid-lines/"}},[t._v("RandomCuboidLines")])],1),t._v(" "),r("td",[t._v("draws multiple lines around Sections of the cuboid."),r("code",[t._v("class RandomCuboidLines :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-random-curve/"}},[t._v("RandomCurve")])],1),t._v(" "),r("td",[t._v("random curves in a given cubic. Always starts at p1 and ends at p2."),r("code",[t._v("class RandomCurve :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-random-noise/"}},[t._v("RandomNoise")])],1),t._v(" "),r("td",[t._v("Random Noise (small mini cubes)"),r("code",[t._v("class RandomNoise :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-random-structures/"}},[t._v("RandomStructures")])],1),t._v(" "),r("td",[t._v("Define your own WallStructure from existing WallStructures."),r("code",[t._v("class RandomStructures :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-raw-ws/"}},[t._v("RawWs")])],1),t._v(" "),r("td",[t._v("Use a json Array of NE Walls and have them be an WallStructure"),r("code",[t._v("class RawWs :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-steady-curve/"}},[t._v("SteadyCurve")])],1),t._v(" "),r("td",[t._v("Draw a steady curve of Walls. that is exactly 1 beat long"),r("code",[t._v("class SteadyCurve :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-test-structure/"}},[t._v("TestStructure")])],1),t._v(" "),r("td",[t._v("This Structure is used for internal testing does not do anything for you"),r("code",[t._v("class TestStructure :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall/"}},[t._v("Wall")])],1),t._v(" "),r("td",[t._v("create a single Wall between to points"),r("code",[t._v("class Wall :")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[t._v("WallStructure")])],1),t._v(" "),r("td",[r("code",[t._v("sealed class WallStructure : Serializable")])])])])]),t._v(" "),r("h3",{attrs:{id:"functions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Summary")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/copy-walls.html"}},[t._v("copyWalls")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".copyWalls(): ArrayList<")]),r("RouterLink",{attrs:{to:"/structure.helper-classes/-spooky-wall/"}},[r("code",[t._v("SpookyWall")])]),r("code",[t._v(">")])],1)]),t._v(" "),r("tr",[r("td",[r("RouterLink",{attrs:{to:"/reference/deep-copy.html"}},[t._v("deepCopy")])],1),t._v(" "),r("td",[r("code",[t._v("fun")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])]),r("code",[t._v(".deepCopy():")]),r("RouterLink",{attrs:{to:"/reference/-wall-structure/"}},[r("code",[t._v("WallStructure")])])],1)])])])])}),[],!1,null,null,null);e.default=a.exports}}]);