global.cooldown = 0;
onEvent('server.tick', event =>{
	if(global.cooldown > 0){
		global.cooldown--
	}
})

onEvent('block.right_click', event =>{
    if (event.item == 'kubejs:alloy_radar' && global.cooldown != 0){
        event.player.tell(Text.red('雷达正在冷却'))
		event.player.tell(Text.green("冷却剩余" + global.cooldown/20 + "秒"))
    }
	if (event.item == 'kubejs:alloy_radar' && global.cooldown == 0){
        global.cooldown = 60;
		let andesite = true;
		let diorite = true;
		for (let x = -8; x <= 9; x++) {
			for (let y = -50; y <= 200; y++) {
				for (let z = -8; z <= 9; z++) {
					if (andesite) {
                        if (event.block.offset(x,y,z).id == 'minecraft:andesite'){
						    event.player.tell("在坐标："+ event.block.offset(x,y,z).getPos()+"处发现安山岩")
						    andesite = false;
                        } else if (diorite) {
                            if (event.block.offset(x,y,z).id == 'minecraft:diorite'){
						        event.player.tell("在坐标："+ event.block.offset(x,y,z).getPos()+"处发现闪长岩")
						        diorite = false;
                            }
                        }
					} else if (diorite) {
                        if (event.block.offset(x,y,z).id == 'minecraft:diorite'){
						    event.player.tell("在坐标："+ event.block.offset(x,y,z).getPos()+"处发现闪长岩")
						    diorite = false;
                        }
					} else {return}
				}
			}
		}
		if (andesite && diorite){
			event.player.tell(Text.yellow("没有在该区块内探测到安山岩或闪长岩"))
		}
	}
	
})
onEvent('recipes', event =>{
	event.shaped("kubejs:alloy_radar",["SIS", " S ", " S "],{I: "minecraft:iron_ingot", S: "minecraft:stick"})
})
