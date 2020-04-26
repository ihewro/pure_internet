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
    if (document.getElementsByClassName("AppHeader-userInfo")[0] != null) {
        document.getElementsByClassName("AppHeader-userInfo")[0].style.visibility = 'hidden'
    }

    //搜索框去掉提示和热榜
    var searchSide = document.getElementsByClassName("SearchSideBar")[0];
    if (searchSide != null) {
        searchSide.parentNode.removeChild(searchSide);
    }
    var search = document.getElementById("Popover1-toggle");
    if(search!=null){
        search.setAttribute("placeholder","")
        //监听focus事件
        search.onfocus = function () {
            //去除搜索提示，提示中包含了热榜
            search.setAttribute("placeholder","")
            var body = document.getElementsByTagName("body")[0];
            var lst = body.lastElementChild;
            // alert(lst.nodeName);
            lst.parentNode.removeChild(lst);
        }

    }


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