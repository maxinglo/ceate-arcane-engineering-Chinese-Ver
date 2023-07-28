onEvent('fluid.registry', event => {
    event.create('sky_solution')
    .thickTexture(0x000033)
    .bucketColor(0x000033)
    .displayName('不稳定陨石溶液')

    event.create('superheated_anthracene')
    .thickTexture(0xFFFFF)
    .bucketColor(0xFFFFF)
    .displayName('过热蒽')
    .noBucket()
    .noBlock()
    .stillTexture('tconstruct:block/fluid/molten/still')
    .flowingTexture('tconstruct:block/fluid/molten/flowing')
    
    
    event.create('refined_oil') //for pneumaticraft fuels
    .thinTexture(0x090909)
    .bucketColor(0x090909)
    .displayName('精炼油') 

    event.create('dichromic_acid') 
    .thinTexture(0x800020)
    .bucketColor(0x800020)
    .displayName('重铬酸')
    
    event.create('chromatic_waste') 
    .thinTexture(0x3A4100)
    .bucketColor(0x3A4100)
    .displayName('铬酸盐废物') 

    event.create('sulfuric_acid') 
    .thinTexture(0x0AFFFFFF)
    .bucketColor(0x0AFFFFFF)
    .displayName('硫磺酸') 

    event.create('invar_slurry')
    .thickTexture(0x333300)
    .bucketColor(0x333300)
    .displayName('殷钢泥浆')

    event.create('liquid_anthraquinone')
    .thinTexture(0x9F2B68)
    .bucketColor(0x9F2B68)
    .displayName('蒽醌')

    event.create('green_anthraquinone')
    .thinTexture(0x03732F)
    .bucketColor(0x03732F)
    .displayName('液态绿色染料')
    
    event.create('portal_actuation_fluid')
    .thinTexture(0x03732F)
    .bucketColor(0x03732F)
    .displayName('传送门激活液')

    event.create('god_actuation_fluid')
    .thinTexture(0x0AFFFFFF)
    .bucketColor(0x0AFFFFFF)
    .displayName('上帝激活液')

    event.create('aureal_essence')
    .thinTexture(0xFFFFFF)
    .bucketColor(0xFFFFFF)
    .displayName('源质精华')

    event.create('liquid_egg')
    .thinTexture(0xF0E5C2)
    .bucketColor(0xF0E5C2).
    displayName('鸡蛋液')
    event.create('liquid_omlett')
    .thinTexture(0xDAD37F)
    .bucketColor(0xDAD37F).
    displayName('液态煎蛋')


    
    function SourceFluids(Name,id,bucket) {
        event.create(id)
        .displayName(Name)
        .stillTexture('kubejs:block/'+ id + "_still")
        .flowingTexture('kubejs:block/'+ id +'_flow')
    }
    
    const Source = [
        ['魔源浆果果汁','sourceberry_juice'],
        ['法师之花花液','magebloom_juice'],
        ['魔花源梅奶昔','magebloom_sourceberry_smoothie'],
        ['浑浊魔源液','impure_source'],
        ['魔源液','source']

    ]
    Source.forEach(element => {
        SourceFluids(element[0],element[1])
        
    }); 

    function Essence(Name,id,color) {
        event.create(id + "_essence")
        .displayName(Name+ "精华")
        .thinTexture(color)
        .stillTexture('tconstruct:block/fluid/molten/still')
        .flowingTexture('tconstruct:block/fluid/molten/flowing')
        .luminosity(8)
    }
    Essence("魔源","source",0x9F2B68)
    Essence("灵魂","soul",0x000099)
    Essence("自然","nature",0x009933)
    Essence("干燥","dry",0xffcc00)
    Essence("冰霜","ice",0x00ccff)


    function juice(name,id,color) {
        event.create(id + "_juice")
        .thinTexture(color)
        .stillTexture('tconstruct:block/fluid/molten/still')
        .flowingTexture('tconstruct:block/fluid/molten/flowing')
        .luminosity(8)
        .displayName(name)
    }

    juice("恼人至高树树液","vexing",0x9F2B68)
    juice("奔流至高树树液","cascading",0x000099)
    juice("繁茂至高树树液","flourishing",0x009933)
    juice("烈焰至高树树液","blazing",0x800020)

    event.create('inertia_essence')
    .displayName("惯性精华")
    .thinTexture(0x009933)
    .bucketColor(0x009933)  

    
    event.create("cae:lst")
    .displayName("液态时空")
    .stillTexture('cae:block/lst_still')
    .flowingTexture('cae:block/lst_flow')

    event.create('liquid_resent')
    .stillTexture('kubejs:block/liquid_resent')
    .displayName('凝怨之液')




});