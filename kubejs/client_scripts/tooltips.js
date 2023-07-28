onEvent('item.tooltip',tooltip => {
    //tooltip.add(['ars_nouveau:source_gem'], 'The tooltip above is wrong, press shift to see how its been changed for this pack.')
    tooltip.addAdvanced('ars_nouveau:source_gem', (item, advanced, text) => {
        text.add(1, Text.darkPurple('通过将魔源浇筑在符文之碑上获得（下面的说明是错的XD）'))
    })
    tooltip.addAdvanced('ars_nouveau:magebloom_crop', (item, advanced, text) => {
        text.add(1, Text.darkPurple('在古人的浮空岛上能找到一些，也可以通过以下方式制作：'))
    })
    tooltip.addAdvanced('ars_nouveau:magebloom', (item, advanced, text) => {
        text.add(1, Text.darkPurple('发现于漂浮的岛屿上，由古代人隐藏。'))
    })
    let toltips =[
        ['thermal:obsidian_glass', "完全无法被凋灵摧毁。"],
        ['thermal:enderium_glass', "完全无法被凋灵摧毁。"],
        ['thermal:lumium_glass', "完全无法被凋灵摧毁。"],
        ['thermal:signalum_glass', "完全无法被凋灵摧毁。"],
        ['createaddition:straw', "右键点击烈焰人燃烧室，允许其接受液体燃料，比如油、精炼燃料等。"],
        ['kubejs:lootbag_create_andesite', "右键打开。你可以使用时运附魔增加更多的幸运值。"],
        ['kubejs:lootbag_arcane_1', "右键打开。你可以使用时运附魔增加更多的幸运值。"],
        ['kubejs:lootbag_arcane_2', "右键打开。你可以使用时运附魔增加更多的幸运值。"],
        ['kubejs:lootbag_arcane_3', "右键打开。你可以使用时运附魔增加更多的幸运值。"],
        ['kubejs:lootbag_poggers', "你做到了。右键打开。"],
        ['kubejs:lootbag_create_brass', "右键打开。你可以使用时运附魔增加更多的幸运值。"],
        ['minecraft:ancient_debris','可以使用魔源水晶催化剂自动化'],
        ['forbidden_arcanus:arcane_crystal', '通过采掘神秘水晶矿石获得。或者通过魔法第三章获得。'],
        ['kubejs:runic_tablet', '右键点击以释放闪电。'],
        ['forbidden_arcanus:corrupted_pixie_utrem_jar', '用腐化小精灵右键点击腐化瓶罐来制作。'],
        ['forbidden_arcanus:pixie_utrem_jar', '清洗腐化小精灵尤特姆罐。'],
        ['forbidden_arcanus:aureal_bottle', '用源质精华装满玻璃瓶来制作。'],
        ["kubejs:source_bucket", "可以通过无序合成魔源桶，也可以右键瓶罐来将液体倒出..."],
        ["ars_nouveau:bucket_of_source", "右键点击魔源瓶罐来盛到同理，然后在工作台中合成一下得到"],
        ["cae:skystone_catalyst", "这个陨石催化剂是外星人的杰作。用红石右键点击后稍等一下，你会发现它会用陨石将自己包裹起来。"],
        ["cae:veridium_catalyst", "这个方块可以在地下海平面以下的晶洞内找到。用红石右键点击后稍等一下，你会发现它会用辉绿岩将自己包裹起来。"],
        ["cae:ochrum_catalyst", "这个方块可以在地下海平面以下的晶洞内找到。用红石右键点击后稍等一下，你会发现它会用赭金砂将自己包裹起来。"],
        ["cae:asurine_catalyst", "这个方块可以在地下海平面以下的晶洞内找到。用红石右键点击后稍等一下，你会发现它会用皓蓝石将自己包裹起来。"],
        ["cae:crimsite_catalyst", "这个方块可以在地下海平面以下的晶洞内找到。用红石右键点击后稍等一下，你会发现它会用绯红岩将自己包裹起来。"],
        ["forbidden_arcanus:stellarite_piece", "将下界之星投掷在Y坐标320以上，它将变为流星碎片。"],
        ["kubejs:fragment_of_patience", "§c *重要提示：动力锯将始终将碎片设为第1阶段，请确保锯只被使用一次！* \n §5涉及7个加工步骤和7个机器，每次世界加载时，加工步骤的顺序都是随机的。第一步始终是切割。\n每个周期有1/1000的几率获得成功。\n关键在于创建一个非常通用的工厂。"]
    ]
    toltips.forEach(i => {
        tooltip.addAdvanced(i[0], (item, advanced, text) => {
            text.add(1, Text.darkPurple(i[1]))
        })
    });
    tooltip.addAdvanced(/sophisticatedbackpacks:.*backpack/, (item, advanced, text) => {
		if (!tooltip.isShift()) {
			if (item.nbt) {
				text.add(1, "§7皮革:§r " + (item.nbt.leather ? item.nbt.leather : 0) + "§7/§r4§7   (§r+1§7物品槽)")
				text.add(2, "§7线:  §r " + (item.nbt.string ? item.nbt.string : 0) + "§7/§r2§7   (§r+1§7物品槽)")
				text.add(3, "§7口袋:§r " + (item.nbt.pocket ? item.nbt.pocket : 0) + "§7/§r2§7   (§r+6§7物品槽)")
				text.add(4, "§7方尖碑:§r " + (item.nbt.obelisk ? item.nbt.obelisk : 0) + "§7/§r1§7   (§r+1§7升级槽)")
				text.add(5, "§7Final PCBs:§r " + (item.nbt.pcb ? item.nbt.pcb : 0) + "§7/§r2§7   (§r+1§7升级槽)")
			} else {
				text.add(1, "§7皮革:§r 0§7/§r4§7   (§r+1§7物品槽)")
				text.add(2, "§7线:  §r 0§7/§r2§7   (§r+1§7物品槽)")
				text.add(3, "§7口袋:§r 0§7/§r2§7   (§r+6§7物品槽)")
				text.add(4, "§7方尖碑:§r 0§7/§r1§7   (§r+1§7升级槽)")
				text.add(5, "§7Final PCBs:§r 0§7/§r2§7   (§r+1§7升级槽)")
			}
		}
	})
    tooltip.addAdvanced("sophisticatedbackpacks:backpack", (item, advanced, text) => {if (!tooltip.isShift()) {text.add(1,"§r9§7物品槽, §r1§7升级槽")}})
    tooltip.addAdvanced("sophisticatedbackpacks:iron_backpack", (item, advanced, text) => {if (!tooltip.isShift()) {text.add(1,"§r45§7物品槽, §r1§7升级槽")}})
    tooltip.addAdvanced("sophisticatedbackpacks:gold_backpack", (item, advanced, text) => {if (!tooltip.isShift()) {text.add(1,"§r27§7物品槽, §r0§7升级槽")}})
    tooltip.addAdvanced("sophisticatedbackpacks:diamond_backpack", (item, advanced, text) => {if (!tooltip.isShift()) {text.add(1,"§r36§7物品槽, §r4§7升级槽")}})
    tooltip.addAdvanced("sophisticatedbackpacks:netherite_backpack", (item, advanced, text) => {if (!tooltip.isShift()) {text.add(1,"§r63§7物品槽, §r2§7升级槽")}})
})
 