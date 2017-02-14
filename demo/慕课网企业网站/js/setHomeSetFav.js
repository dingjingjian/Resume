//JS部分

function AddFavorite(sURL, sTitle)
{
    
    sURL = encodeURI(sURL);
    try
    {
        
        window.external.addFavorite(sURL, sTitle);
        
    }
    catch (e)
    {
        
        try
        {
            
            window.sidebar.addPanel(sTitle, sURL, "");
            
        }
        catch (e)
        {
            
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加！");
            
        }
        
    }
    
}

//?Ϊ?ҳ

function SetHome(url)
{
    
    if (document.all)
    {
        
        document.body.style.behavior = 'url(#default#homepage)';
        
        document.body.setHomePage(url);
        
    }
    else
    {
        
        alert("请手动设置主页!");
        
    }
    
}
