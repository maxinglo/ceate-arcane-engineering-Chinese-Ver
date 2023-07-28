onEvent('block.registry', event => {
  let layer = "cutout"
 event.create('skystone_catalyst').unbreakable().displayName('陨石催化剂').material('lantern').notSolid().renderType(layer).hardness(3.0)
 event.create('source_time_crystal').material('glass').displayName('魔源时间水晶').material('lantern').notSolid().renderType(layer).hardness(3.0)
  //event.create('andesite_machine').displayName('Andesite Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
  //event.create('brass_machine').displayName('Brass Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
  //event.create('sealed_machine').displayName('Copper Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
  //event.create('integrational_machine').displayName('Integrational Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
  event.create('sturdy_machine').displayName('坚固机器').material('lantern').notSolid().renderType(layer).hardness(3.0)
 // event.create('radiant_machine').displayName('Radiant Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
  //event.create('plastic_machine').displayName('Plastic Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
  //event.create('time_machine').displayName('Time Machine').material('lantern').notSolid().renderType(layer).hardness(3.0)
  event.create('supercritical_machine').displayName('超临界机器').material('lantern').notSolid().renderType(layer).hardness(3.0)
  event.create('gold_casing').displayName('金质机壳')
 event.create('zinc_casing').displayName('锌质机壳')
 event.create('enderium_casing').displayName('末影机壳')
 event.create('supercritical_casing').displayName('超临界机壳')
 event.create('omlett_block').displayName('煎蛋方块')
});
