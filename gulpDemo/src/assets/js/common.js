(function(w){
    
    //移动端点击延迟优化
    $(function() {  
        FastClick.attach(document.body);  
    }); 
    //pc端初始化功能
    $(function(){
        var $header = $('.header');
        var $headerNav = $header.children('.header-nav');
        var $mainMenuList = $headerNav.children('.main-menu-list');
        var $leftMenuBox = $headerNav.children('.left-menu-box');

        var transitionEndName = 'animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd';

        //设置一个timer来提高动画的稳定性
        var mainMenuToggle = function() {
            var timer = null;
            return {
                active: function($menu) {
                    timer = timer && clearTimeout(timer);
                    $menu.siblings('.line').addClass('show').css({
                        'width': $menu.width() + 'px',
                        'left': $menu.offset().left + 'px'
                    });
                },
                cancelActive: function() {
                    timer && clearTimeout(timer);
                    timer = setTimeout(function(){
                        $mainMenuList.children('.line').removeClass('show').css({
                            'width': '0'
                        });
                    }, 300);
                }
            }
        }();
        
        var leftMenuToggle = function() {
            var timer = null;
            var defaultHeight = $leftMenuBox.height();
            $leftMenuBox.css('min-height', defaultHeight + 'px');
            return {
                active: function() {
                    timer = timer && clearTimeout(timer);
                    $leftMenuBox.height($(window).height() + $(window).scrollTop() - $header.height())
                        .addClass('active');
                },
                cancelActive: function() {
                    timer && clearTimeout(timer);
                    timer = setTimeout(function(){
                        $leftMenuBox.removeClass('active');
                    }, 300);
                }
            }
        }();

        var leftMenuChildToggle = function() {
            var timers = {};
            return {
                active: function($menu) {
                    
                    var $menuList = $menu.parent();
                    var $parent = $menuList.parent();
                    var parentZIndex = $parent.hasClass('left-menu-box')?$parent.css('z-index'):$parent.parent('.child-list').css('z-index');
                    var $childList = $menuList.siblings('.child-list');
                    
                    $menu.addClass('active').siblings().removeClass('active');

                    if(!$menu.data('target')) {
                        return;
                    }
                    timers[parentZIndex] = timers[parentZIndex] && clearTimeout(timers[parentZIndex]);
                    $menuList.css('z-index', parentZIndex - 1);
                    $childList.css('z-index', parentZIndex - 2)
                        .addClass('active')
                        .children('[data-id=' + $menu.data('target') + ']').show().siblings().hide();
                },
                cancelActive: function($menu) {
                    // if(!$menu.data('target')) {
                    //     return;
                    // }
                    var $menuList = $menu.parent();
                    var $parent = $menuList.parent();
                    var parentZIndex = $parent.hasClass('left-menu-box')?$parent.css('z-index'):$parent.parent('.child-list').css('z-index');
                    var $childList = $menuList.siblings('.child-list');

                    timers[parentZIndex] && clearTimeout(timers[parentZIndex]);
                    timers[parentZIndex] = setTimeout(function(){
                        $menu.removeClass('active');
                        $childList.removeClass('active')
                            .on(transitionEndName, function(){
                                $childList.off(transitionEndName);
                                $(this).children('[data-id=' + $menu.data('target') + ']').hide();
                            });
                    }, 300);
                }
            }
        }();

        //主导航菜单hover动画，主菜单显示左侧菜单
        $mainMenuList.on('mouseenter', '>.menu', function(){
            var $this = $(this);
            mainMenuToggle.active($this);
            if($this.hasClass('left-menu-control')) {
                leftMenuToggle.active();
            }
        }).on('mouseleave', '>.menu', function(){
            var $this = $(this);
            mainMenuToggle.cancelActive();
            if($this.hasClass('left-menu-control')) {
                leftMenuToggle.cancelActive();
            }
        });

        // 左侧菜单也要控制一下主按钮的active
        $leftMenuBox.on('mouseenter', function(){
            leftMenuToggle.active();
            mainMenuToggle.active($mainMenuList.children('.left-menu-control'));
        }).on('mouseleave', function(){
            leftMenuToggle.cancelActive();
            mainMenuToggle.cancelActive();
        });

        $leftMenuBox.on('mouseenter', '.menu', function() {
            var $this = $(this);
            leftMenuChildToggle.active($this);
        }).on('mouseleave', '.menu', function(){
            var $this = $(this);
            leftMenuChildToggle.cancelActive($this);
        });

        $leftMenuBox.on('mouseenter', '.child', function() {
            var $this = $(this);
            var $relMenu = $this.parent().siblings('.menu-list').children('[data-target=' + $this.data('id') + ']');
            leftMenuChildToggle.active($relMenu);
        }).on('mouseleave', '.child', function() {
            var $this = $(this);
            var $relMenu = $this.parent().siblings('.menu-list').children('[data-target=' + $this.data('id') + ']');
            leftMenuChildToggle.cancelActive($relMenu);
        });

    });
    
    //移动端初始化功能
    $(function(){
        var $header = $('.header');
        var $menuBtn = $header.find('.header-banner .menu-btn');
        var $menu = $header.children('.m-header-nav');
        var $menuMask = $menu.children('.nav-mask');
        var $menuBody = $menu.children('.nav-body');

        var transtionEndName = 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd';

        $menuBtn.on('click', function(){
            $menu.addClass('active');
            setTimeout(() => {
                $menuMask.addClass('active');
                $menuBody.addClass('active');
                $('html,body').css({
                    'overflow': 'hidden',
                    'position': 'absolute',
                    'height': '100%'
                });
            }, 100);
            
        });

        $menuMask.on('click', function(){
            $menuBody.on(transtionEndName, function() {
                $menuBody.off(transtionEndName);
                $menu.removeClass('active');
            }).removeClass('active');
            $menuMask.removeClass('active');
            $('html,body').css({
                'overflow': '',
                'position': '',
                'height': ''
            });
        });
        
        $menuBody.on('click', '.menu-text', function() {
            var $this = $(this);
            var $thisMenu = $this.parent();
            if($thisMenu.hasClass('transitioning')) {
                return;
            }
            $thisMenu.addClass('transitioning');
            var $child = $thisMenu.children('.menu-child');

            if(!$child.length) {
                $thisMenu.removeClass('transitioning');
                return;
            }

            var childHeight = $child.outerHeight() || 500;

            if($thisMenu.hasClass('active')) { //关闭
                $thisMenu.removeClass('active');
                $child.css({
                    'margin-top': -childHeight+'px',
                    'z-index': '-1'
                }).one('webkitTransitionEnd', function(){
                    $thisMenu.removeClass('open');
                    $thisMenu.removeClass('transitioning');
                    $child.css({
                        'z-index': ''
                    })
                });
            }
            else { //展开
                $child.addClass('no-transition').css({
                    'margin-top': -childHeight+'px',
                    'z-index': '-1'
                });
                $thisMenu.addClass('active open');
                setTimeout(() => {
                    $child.removeClass('no-transition').css({
                        'margin-top': '0'
                    }).one('webkitTransitionEnd', function(){
                        $child.css({
                            'z-index': ''
                        })
                        $thisMenu.removeClass('transitioning');
                    });
                }, 100);
            }
        });
    });
})(window);