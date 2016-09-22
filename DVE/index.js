/**
 * Created by bgllj on 2016/7/5.
 */

// import Vue from "vue";
import App from "./components/area.vue";
// import vi from "./components/AttributePanel_valueInput.vue";

//
// +---------------+
// |   DOCUMENT    |
// +-------+-------+
//         |
//         |                                   +--------------------------+
//         |                                   |       DNA RENDERER       |
//         |   +-------------------------------+                          +-----+
//         |   |                               |                          |     |
//         |   |                               +------------+-------------+     |
//         |   |                                            |                   |
//         |   |                                            |                   |
//         |   |                               +------------+-------------+     |
// +-------+---v---+                           |         DNA MODEL        |     |
// |    LAYERS     +---------------------------+                          |     |
// +---------------+                           |                          |     |
//                                             +------------+-------------+     |
//                                                          |                   |
//                 +--------------------------+             |   +---------------+-----+
//                 |      SELCET LAYERS       |             |   |     VAR SYSTEM      |
//                 |                          +-------------+   |                     |
//                 |   (selectsMembrane.js)   |                 |   (varSystem.js)    |
//                 +------------+-------------+                 +-----------+---------+
//                              |                                           |
//                              |                                           |
//                 +------------+-------------+                             |
//                 |        EDIT PANEL        |                             |
//                 |                          +-----------------------------+
//                 |                          |
//                 +--------------------------+


import AttrPanel from "./components/AttributePanel.vue";
import  Lang from "./Caryon/lang";
//CEP 库-------------------------------------
if (typeof window.__adobe_cep__ !== "undefined")
{
    window.cs = new CSInterface();
} else
{
    console.info("running without CEP!")
}
//数据存储系统-------------------------------------
import  DataCaryon  from "./Caryon/dataCaryon";
var dataCaryon = new DataCaryon();
window.dataCaryon = dataCaryon;
// 变量系统-------------------------------------
import  VarSystem  from "./Caryon/varSystem";
var varSystem = new VarSystem();
window.varSystem = varSystem;
//设置系统-------------------------------------
import  SetSystem  from "./Caryon/settingCaryon";
var setSystem = new SetSystem();
window.setSystem = setSystem;
//PhotoShop 接口库-------------------------------------
import  Enzymes  from "./Enzymes/Enzymes";
if (typeof window.__adobe_cep__ !== "undefined")
{
    var enzymes = new Enzymes();
    window.enzymes = enzymes;
}
//测试系统-------------------------------------
import  TEST  from "./test/test_core";
var test = new TEST("默认测试");
window.test = test

window.tests = {};
import  test_task_Enzymes from "./test/test_Enzymes_JS";
window.tests.task_Enzymes = test_task_Enzymes;


Vue.filter('lang', Lang.fiterFunc);
Lang.currentLANG = Lang.LANG_Chiness2English;
window.Lang = Lang;

Vue.config.debug = true;//开启错误提示


window.Gob = {};
window.Gob.position = {
    x: 2,
    y: 3,
    w: 4,
    h: 5,
    assignment: {x: null, y: null, w: null, h: null},
    enableAssigns: {x: false, y: false, w: false, h: false}
};


var mainVue = new Vue({
    el: 'body',
    data: {},
    components: {
        // include the required component
        // in the options
        app: AttrPanel,

    }
})

window.mainVue = mainVue;


async function doAsync()
{
    return new Promise(function (resolve, reject)
    {
        setTimeout(()=>
        {
            console.log("sleep 2s");
            resolve(444)
        }, 2000)
    })
}


async function asyncTask()
{

    console.log("ssss1")
    var a = await  doAsync();
    console.log("ssss2" + a)
}


asyncTask()
console.log("sss_end")

// if (typeof window.__adobe_cep__ !== "undefined")
// {
//     window.cs = new CSInterface();
//     var gExtensionID = cs.getExtensionID();
//     cs.addEventListener("com.adobe.PhotoshopJSONCallback" + gExtensionID, PhotoshopCallbackUnique);
//
//     function PhotoshopCallbackUnique(csEvent)
//     {
//         console.log(csEvent);
//         alert("xxxxx22")
//     }
//
// }
tests.task_Enzymes()