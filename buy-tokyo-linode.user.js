// ==UserScript==
// @name           Buy Tokyo Linode
// @namespace      Buy Tokyo Linode
// @description    Buy Tokyo Linode
// @match					 https://manager.linode.com/linodes/add*
// @version        0.1
// @grant          none
// @copyright      don-johnny
// @updateURL      https://github.com/don-johnny/UserScripts/raw/master/buy-linode-tokyo.user.js
// @downloadURL    https://github.com/don-johnny/UserScripts/raw/master/buy-linode-tokyo.user.js
// ==/UserScript==
// thanks to https://github.com/ytzong/UserScripts
function isContain(ojbCollection, objValue) {
  var isValInCol = false;
  for (var item in ojbCollection) {
    if (item.value == objValue) {
      isValInCol = true;
      break;
    }
  }
  return isValInCol;
}
function refreshJ()
{
  window.location.reload();
}
function buyTokyoNode() {
  try {
    //1G Linode Plan
    var buyPlan = linode1024.4;
    document.getElementById(buyPlan).checked = true;
    //Tokyo datacenter ID
    var doc_dcID = document.getElementById('DatacenterID');
    var tokyodcID = 8;
    var isTokyoNodeOnsale = isContain(doc_dcID.options, tokyodcID);
    //alert(itemIndex);
    if (isTokyoNodeOnsale)
    {
      //on sale.
      doc_dcID.value = tokyodcID;
      document.getElementById('signup').submit()
    } 
    else
    {
      //out of stock.
      //alert('none');
      //10s refresh cycle
      setTimeout(refreshJ, 10000);
    }
  } 
  catch (e) {
  }
}
buyTokyoNode();
