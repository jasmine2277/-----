(function(){
    var ChangeList=function(ele,opt){
        this.element=ele;
        this.default={
            'timeset': '2000',
            'number': '4'
        };
        this.opt=$.extend({},this.default,opt);
    };
    ChangeList.prototype.changePic=function(){
            legend_item.eq(sindex).addClass('active').siblings('li').removeClass('active');
            index.eq(sindex).fadeIn(300).siblings('li').fadeOut(300);
    };
    ChangeList.prototype.autoPlay=function(){
            var num=this.opt.number;
            time=setInterval(function(){
                sindex++;
                if(sindex>num-1) {
                    sindex=0;
                }
                ChangeList.prototype.changePic();
            },this.opt.timeset)
    };
    $.fn.Change=function(options){
        var changeway=new ChangeList(this, options);
        sindex=0;
        index=$('.slide').find('li');
        var sign='';
        for(var i=0;i<changeway.opt.number;i++) {
            sign+='<li></li>';
        }
        $('.legend').append(sign);

        legend_item=$('.legend').find('li');

        legend_item.hover(function(){
            sindex=$(this).index();
            changeway.changePic();
            clearInterval(time);
        },function(){
            if (changeway.opt.number>1) {
                changeway.autoPlay();
        }
        });
        changeway.changePic(sindex,legend_item,index);
        if (changeway.opt.number>1) {
            changeway.autoPlay();
        }
    }
})();