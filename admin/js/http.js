(function(w){
    //设置全局
    $.ajaxSetup({
        //headers token验证
        headers:{
            Authorization:localStorage.getItem('token')
        },
        beforeSend:function(){
            if(window.NProgress){
                NProgress.start();
            }
        },
        error:function(){
            //调用模态框，修改提示
            $('.modal').modal();
            $('.modal-body p').html('获取数据失败，请重新登录');
            //点击事件 页面跳转
            $('.btn-success').click(function () { 
                location.href='./login.html';
            });
        },
        complete:function(){
            if(window.NProgress){
                NProgress.done();
            }
        },
    })
  
    //创建对象管理请求地址
    //准备基地址
    const baseUrl='http://localhost:8080/api/v1';
    const urls = {
        baseUrl:         baseUrl,//基地址
        user_login:      baseUrl + '/admin/user/login',//用户登录
        user_info:       baseUrl + '/admin/user/info',//用户信息
        user_detail:     baseUrl + '/admin/user/detail',//用户详情
        user_edit:       baseUrl + '/admin/user/edit',//用户编辑
        category_list:   baseUrl + '/admin/category/list',//文章类别查询
        category_add:    baseUrl + '/admin/category/add',//文章类别新增
        category_search: baseUrl + '/admin/category/search',//文章类别搜索
        category_edit:   baseUrl + '/admin/category/edit',//文章类别编辑
        category_delete: baseUrl + '/admin/category/delete',//文章类别删除
        article_query:   baseUrl + '/admin/article/query',//文章搜索
        article_publish: baseUrl + '/admin/article/publish',//文章发布
        article_search:  baseUrl + '/admin/article/search',//文章信息查询
        article_edit:    baseUrl + '/admin/article/edit',//文章编辑
        article_delete:  baseUrl + '/admin/article/delete',//文章删除
        comment_list:    baseUrl + '/admin/comment/search',//文章评论列表
        comment_pass:    baseUrl + '/admin/comment/pass',//文章评论通过
        comment_reject:  baseUrl + '/admin/comment/reject',//文章评论不通过
        comment_delete:  baseUrl + '/admin/comment/delete',//文章评论删除
    };
    //变为全局对象
    window.urls=urls;

})(window)