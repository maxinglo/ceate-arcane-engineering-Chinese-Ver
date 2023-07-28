
onEvent('item.registry.tool_tiers', event => {
  event.add('tool', tier => {
    tier.uses = 250
    tier.repairIngredient = '#forge:ingots/iron'
  })
  event.add('zyzz', tier => {
    tier.uses = -1
    tier.speed = 20.0
    tier.attackDamageBonus = 36.0
    tier.level = 20
    tier.enchantmentValue = 200
    tier.repairIngredient = 'avaritia:zyzzium_ingot'
  })
  event.add('lootbag', tier =>{
    tier.speed = 0.0
    tier.uses = -1
    tier.enchantmentValue = 15
    tier.attackDamageBonus = 0
  })
});

onEvent('item.registry', (event) => {
  let mechanism = (id, name, rarity) => {
    event.create(id + '_mechanism').texture("kubejs:item/" + id + "_mechanism").displayName(name + '构件').rarity(RARITY_COMMON)
    event.create('incomplete_' + id + '_mechanism', 'create:sequenced_assembly').texture("kubejs:item/incomplete_" + id + "_mechanism").displayName('未完成的' + name + '构件')

  }
  let tool = (id,name,rarity) => {
    event.create(id, 'sword').tier('tool').texture("kubejs:item/" + id).displayName(name).rarity(RARITY_COMMON)//这是一把出自浙江龙泉县的名剑，相传由欧冶子所铸，剑身上有五色龙纹和七星斗像，可以断金裂玉
  }
  event.create("avaritia:zizz", 'sword').tier('zyzz').displayName("龙泉").rarity(RARITY_EPIC)

  let seed = (id,name) => {
    event.create(id + '_seed').texture("kubejs:item/" + id + "_seed").displayName(name + '种子')
    event.create(id + '_cluster').texture("kubejs:item/" + id + "_cluster").displayName(name + '种子簇')
    event.create('incomplete_' + id, 'create:sequenced_assembly').texture("kubejs:item/incomplete_" + id).displayName('未完成的' + name)
  }
  event.create('leather_pocket').displayName('皮革口袋')
  event.create('radiant_coil').glow(true).texture("kubejs:item/radiant_coil").displayName('光辉管')
  event.create('radiant_sheet').glow(true).texture("kubejs:item/radiant_sheet").displayName('光辉版')
  event.create('petrified_sheet').texture("kubejs:item/petrified_sheet").displayName('薄木板')
  event.create('enriched_rubber').texture("kubejs:item/enriched_rubber").displayName('门瑞欧富集橡胶')
  event.create('certus_quartz_seed_cluster').texture("kubejs:item/certus_quartz_cluster").displayName('赛特斯石英簇')
  event.create('incomplete_certus_quartz_cluster', 'create:sequenced_assembly').texture("kubejs:item/incomplete_certus_quartz_cluster").displayName('未完成的赛特斯石英簇')
  mechanism('kinetic', '动力')
  event.create('makeshift_kinetic_mechanism').tooltip("没有足够门瑞欧树时的临时替代品，未来几乎没有升级空间")
  mechanism('sealed', '密封') 
  mechanism('sturdy','坚固')
  mechanism('plastic', '塑料', RARITY_UNCOMMON)
  mechanism('integrational', '集成', RARITY_UNCOMMON)
  mechanism('radiant','光辉', RARITY_UNCOMMON)
  mechanism('time','时间' , RARITY_RARE)
  mechanism('supercritical','超临界', RARITY_RARE)
  tool('saw','锯')
  seed('quartz','石英')
  tool('screwdriver','螺丝刀')

  tool('resonator','谐振器') 
  event.create('rune_dust').displayName('符文尘')
  event.create('anthracene').displayName('蒽').tooltip("C₁₄H₁₀")
  event.create('incomplete_anthraquinone').displayName('蒽醌半成品').tooltip("下一步：浸泡在铬酸中")
  event.create('anthraquinone').displayName('蒽醌').tooltip("C₁₄H₈O₂")
  event.create('chrom').displayName('铬').tooltip("Cr")
  event.create('powdered_flint').displayName('充能燧石').tooltip("与精炼油混合搅拌得到火药")
  event.create('empty_vial').displayName('空试管')
  //start chapter 4
  let k = '未装配的PCB'
  event.create('incomplete_pcb_blueprint', 'create:sequenced_assembly').displayName('未完成的PCB蓝图')
  event.create('plastic_board').displayName('塑料板')
  event.create('etched_board').displayName(k).tooltip("下一步：在离心分离机内分离剩余的残留物")
  event.create('dryed_board').displayName(k).tooltip("下一步：打包以便印刷图例")
  event.create('separated_board').displayName(k).tooltip("下一步：应用焊接层")
  event.create('masked_pcb').displayName(k).tooltip("下一步：在感应炉中干燥")
  event.create('incomplete_masked_pcb', 'create:sequenced_assembly').displayName('未完成的未组装的PCB')
  event.create('pcb_assembly').displayName('PCB套装组件')
  event.create('incomplete_pcb_assembly', 'create:sequenced_assembly').displayName('未完成的PCB套装组件')
  event.create('pcb_assembly_2').displayName('PCB图例套装组件')
  event.create('incomplete_pcb_assembly_2', 'create:sequenced_assembly').displayName('未完成的PCB图例套装组件')
  event.create('legend_pcb').displayName(k).tooltip("下一步：进行电镀镍金处理")
  event.create('incomplete_tested_pcb', 'create:sequenced_assembly').displayName('未完成的未组装PCB')
  event.create('untested_pcb').displayName(k).tooltip("下一步：使用钻头进行电器测试")
  event.create('tested_pcb').displayName(k).tooltip("下一步：清洗电路板")  
  event.create('cleaned_pcb').displayName(k).tooltip("下一步：最后一步，干燥一下")
  event.create('incomplete_calculation_circuit', 'create:sequenced_assembly').displayName('未完成的计算电路板')
  event.create('incomplete_logic_circuit', 'create:sequenced_assembly').displayName('未完成的逻辑电路板')
  event.create('incomplete_engineering_circuit', 'create:sequenced_assembly').displayName('未完成的工程电路板')
  event.create('electricaly_tested').displayName(k).tooltip("下一步：使用钻头进行电器测试")
  event.create('mystery_pcb').displayName(k).tooltip("下一步：用砂纸打磨后观察内部")
  event.create("separated_board_stack").displayName(k)
  event.create("dryed_board_stack").displayName(k)

  //start M2
  event.create('mage_leaf').displayName('魔力绽放叶')
  event.create('magebloom_sourceberry_smoothie_bowl').displayName('魔花源梅奶昔碗').food(food => {
    food.hunger(8).saturation(12).effect("ars_nouveau:mana_regen",300,2,1).eaten(ctx => {
      ctx.player.give(Item.of("minecraft:bowl",1))
    })
  })
  event.create('dirty_bowl').displayName('一碗树叶')
  //start m3
  event.create('sourcegem_fragments').displayName('魔源晶体碎片')
  //compat shit
  event.create('incomplete_cogwheel', 'create:sequenced_assembly').displayName('未完成的齿轮')
  event.create('runic_tablet').displayName("符文之碑").tooltip("背后究竟隐藏了多少秘密？")
  event.create('alloy_radar').displayName('合金扫描仪').tooltip("右键地面以探测区块中是否有安山岩或闪长岩 *可能会造成卡顿*")

  //ch5calcstuff
  event.create('damaged_a').displayName('PCB A碎片')
  event.create('damaged_b').displayName('PCB B碎片')
  event.create('damaged_c').displayName('PCB C碎片')
  event.create('damaged_d').displayName('PCB D碎片')
  event.create('damaged_e').displayName('PCB E碎片')
  event.create('damaged_f').displayName('PCB F碎片')
  event.create('damaged_g').displayName('PCB G碎片')
  event.create('a').displayName('PCB A部分')
  event.create('b').displayName('PCB B部分')
  event.create('c').displayName('PCB C部分')
  event.create('d').displayName('PCB D部分')
  event.create('e').displayName('PCB E部分')
  event.create('f').displayName('PCB F部分')
  event.create('g').displayName('PCB G部分')
  event.create('fragment_of_patience').glow(true).rarity(RARITY_EPIC)
  event.create('finalpcb').displayName('零点模块印刷电路板')
  event.create('menril_shrub').displayName('门瑞欧枯枝').tooltip("因为空气中奥术能量的减弱，门瑞欧树苗的生命精华有所流失，或许一点水可以帮助它恢复？")
  event.create('rejuvinated_menril_shrub').displayName('活化门瑞欧树枝').tooltip("你已经成功将它复活了。然而，它似乎还没有完全达到原始树苗的水平。或许加入门瑞欧浆果可以对其完全复活产生贡献？")

  //m4
  event.create('cae:time_crystal').displayName('时间晶体碎片')

  function Keystone(id,color) {
    event.create("cae:"+ id + "_keystone").texture("kubejs:item/gem").color(0, color).rarity(RARITY_EPIC)
  }
  Keystone("source",0x9F2B68)
  Keystone("soul",0x000099)
  Keystone("nature",0x009933)
  Keystone("dry",0xffcc00)
  Keystone("ice",0x00ccff)
  /*let keystones = ["source","soul","nature","dry","ice"]
  keystones.forEach(element => {
    event.create("cae:"+ element[0] + "_keystone").texture("kubejs:items/gem").color(0x9F2B68)
  });
  */
  event.create("avaritia:zyzzium_ingot").texture("kubejs:item/zyzz").rarity(RARITY_EPIC).displayName("龙泉锭").tooltip('龙泉是一把出自浙江龙泉县的名剑，相传由欧冶子所铸，剑身上有五色龙纹和七星斗像，可以断金裂玉 *原文为zyzz，代表一种吃药健身的生活方式，译者认为不太合适，因此稍加改动*')
  event.create("broken_arcane_egg").displayName("破碎奥术蛋").rarity(RARITY_EPIC)
  event.create("arcane_unscrambled_egg").displayName("奥术溏心蛋").rarity(RARITY_EPIC).food(food => {
    food.hunger(8).saturation(3).effect("ars_nouveau:mana_regen",1200,2,1).effect('haste', 600, 2, 1).eaten(ctx => {ctx.player.tell(Text.darkPurple("You feel Arcane."))})
  })
  event.create("source_candy_rock").displayName("魔源糖果石").rarity(RARITY_EPIC).food(food => {
    food.hunger(8).saturation(4).effect("ars_nouveau:mana_regen",2800,3,1).effect('strength', 600, 2, 1).eaten(ctx => {ctx.player.tell(Text.darkPurple("You feel Source coarsing through your veins."))})
  })
  event.create("sushi").displayName('寿司').rarity(RARITY_EPIC).food(food => {
    food.hunger(8).saturation(4).effect("ars_nouveau:mana_regen",1200,2,1).effect('water_breathing', 600, 0, 1).eaten(ctx => {ctx.player.tell(Text.yellow("You feel Cool."))})
  })
  event.create("magical_ice").displayName("魔冰").rarity(RARITY_EPIC).food(food => {
    food.hunger(8).saturation(4).effect("ars_nouveau:mana_regen",1200,2,1).effect('minecraft:speed', 600, 2, 1).eaten(ctx => {ctx.player.tell(Text.blue("You feel Iced Out."))})
  })
  event.create("arcane_omelett_sheet").displayName("奥术煎蛋").rarity(RARITY_EPIC).food(food => {
    food.hunger(20).saturation(12).effect("ars_nouveau:mana_regen",2400,3,1).effect('instant_health', 600, 2, 1).eaten(ctx => {ctx.player.tell(Text.gold("You feel Godlike."))})
  })
  //C5    
  event.create('cae:stem_cell').displayName("干细胞").texture("kubejs:item/stem_cell").rarity(RARITY_EPIC).food(food => {
    food
    		.hunger(6)
    		.saturation(6)//This value does not directly translate to saturation points gained
      		//The real value can be assumed to be:
      		//min(hunger * saturation * 2 + saturation, foodAmountAfterEating)
          .effect('instant_health', 600, 0, 1)
          .effect('water_breathing', 600, 0, 1)
      		.removeEffect('poison')
      		.alwaysEdible()//Like golden apples
      		.fastToEat()//Like dried kelp
      		.meat()//Dogs are willing to eat it
      		.eaten(ctx => {//runs code upon consumption
            ctx.player.tell(Text.darkGreen('你感到倍儿有精神！'))
            //If you want to modify this code then you need to restart the game.
            //However, if you make this code call a global startup function
            //and place the function *outside* of an event handler
            //then you may use the command:
            //  /kubejs reload startup_scripts
            //to reload the function instantly.
            //See example below
          })
  })

  //sum chapter 2 stuff
  event.create("redstone_cluster").displayName('红石晶簇')
  event.create("redstone_seed").displayName('红石种子')
  event.create("lootbag_create_andesite", "hoe").displayName("工程师入门包").rarity(RARITY_RARE).unstackable()
  event.create("lootbag_arcane_1", "hoe").displayName("奖励包").rarity(RARITY_UNCOMMON).unstackable()
  event.create("lootbag_arcane_2", "hoe").displayName("史诗奖励包").rarity(RARITY_RARE).unstackable()
  event.create("lootbag_arcane_3", "hoe").displayName("传说奖励包").rarity(RARITY_EPIC).unstackable()
  event.create("lootbag_poggers", "hoe").displayName("耐心的回报").rarity(RARITY_EPIC).unstackable()
  event.create("lootbag_create_brass").displayName("工程师进阶包").rarity(RARITY_EPIC).unstackable()
});
