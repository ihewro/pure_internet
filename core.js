// ==UserScript==
// @name         去除知乎干扰
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       ihewro
// @match        *://www.zhihu.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    console.log(window.location.href);

    //首页
    if (document.getElementsByClassName("Topstory")[0] != null) {
        document.getElementsByClassName("Topstory")[0].style.visibility = 'hidden'
    }

    if (document.getElementsByClassName("TopstoryPageHeader-main")[0] != null) {
        document.getElementsByClassName("TopstoryPageHeader-main")[0].style.visibility = 'hidden'
    }
    if (window.location.href === "https://www.zhihu.com/hot") {//首页只保留搜索框
        document.getElementsByTagName("body")[0].style.background = "#fff";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
        document.getElementsByClassName("AppHeader-inner")[0].style.position="fixed";
        document.getElementsByClassName("AppHeader-inner")[0].style.top="30%";
        document.getElementsByClassName("AppHeader-inner")[0].style.margin="0 auto";
        document.getElementsByClassName("AppHeader-inner")[0].style.left="0";
        document.getElementsByClassName("AppHeader-inner")[0].style.right="0";

    }



    //全站通用
    //不显示发现、热榜这些栏目
    if (document.getElementsByClassName("AppHeader-Tabs")[0] != null) {
        document.getElementsByClassName("AppHeader-Tabs")[0].style.visibility = 'hidden'
    }
    //不显示用户信息
    // if (document.getElementsByClassName("AppHeader-userInfo")[0] != null) {
    //     document.getElementsByClassName("AppHeader-userInfo")[0].style.visibility = 'hidden'
    // }

    //不显示消息提示和别的，但显示个人入口
    if (document.getElementsByClassName("AppHeader-notifications")[0] != null) {
        document.getElementsByClassName("AppHeader-notifications")[0].style.visibility = 'hidden'
    }

    if (document.getElementsByClassName("AppHeader-messages")[0] != null) {
        document.getElementsByClassName("AppHeader-messages")[0].style.visibility = 'hidden'
    }



    //搜索框去掉提示和热榜
    var searchSide = document.getElementsByClassName("SearchSideBar")[0];
    if (searchSide != null) {
        searchSide.parentNode.removeChild(searchSide);
    }

    //定时器去除placeholder
    var clock = function() {
        var search = document.getElementById("Popover1-toggle");
        var search2 = document.getElementById("Popover2-toggle");
        if(search!=null){
            search.setAttribute("placeholder","")
            window.requestAnimationFrame(clock);
        }
        if(search2!=null){
            search2.setAttribute("placeholder","")
            window.requestAnimationFrame(clock);
        }
    }


    var requestId = window.requestAnimationFrame(clock);


    document.styleSheets[0].insertRule('.SearchBar-topSearchItem {display: none!important}', 0);
    document.styleSheets[0].insertRule('.WikiBox{display:none!important;}', 0);
    document.styleSheets[0].insertRule('.CornerButtons{display:none!important;}', 0);
    document.styleSheets[0].insertRule('.KfeCollection-PcCollegeCard-root{display:none!important;}', 0);


    //问题详情页面
    if (document.getElementsByClassName("Question-sideColumn")[0] != null) {
        document.getElementsByClassName("Question-sideColumn ")[0].style.display = 'none'
    }


    if (document.getElementsByClassName("Question-mainColumn")[0] != null) {
        document.getElementsByClassName("Question-mainColumn")[0].style.width = '100%'
    }

    //搜索列表页面
    if (document.getElementsByClassName("SearchMain")[0] != null) {
        document.getElementsByClassName("SearchMain")[0].style.width = '100%'
    }



})();