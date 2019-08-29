package structures

import song._obstacles

object WallStructureManager
{
    private val wallStructuresList = arrayListOf<WallStructure>()

    fun loadManager(list:ArrayList<CustomWallStructure>) {
        with(wallStructuresList){
            //add(Text)
            add(RandomLines)
            add(RandomNoise)
            add(BroadRandomNoise)
            add(RandomSideLines)
            add(RandomBox)
            add(RandomBlocks)
            add(RandomFastBlocks)
            add(Helix)
            add(ReverseHelix)
            add(MirroredHelix)
            add(FastHelix)
            add(HyperHelix)
            add(EmptyHelix)
            add(StairWay)
            add(Line)
            add(MirroredLine)
            add(CyanLine)
            add(Spiral)
            addAll(list)
        }
    }


    fun get(parameters: Parameters): ArrayList<_obstacles> {

        //all the variables
        val list = arrayListOf<_obstacles>()
        val count = parameters.repeatCount
        val gap = parameters.repeatGap

        //gets repeat right
        for (i in 0..count) {

            //gets the structure with the given name, or just an empty arrayListOf<_obstacles>
            val structure = wallStructuresList.find {
                it.name.toLowerCase() == parameters.name.toLowerCase()
            }?.getObstacleList(parameters) ?: arrayListOf()

            list.addAll(structure)
            parameters.startTime += gap
        }

        return list
    }
}