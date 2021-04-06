/**
 * Created by Ernesto  on 09/06/2017.
 */
 // @flowa
var locationPath="static-assets/"
window.addEventListener("load", startApp);

var locationPath="static-assets/"

function startApp(){



    ////////////////////////
    var share = function (Vue,options) {
        Vue.prototype.$BUS =new Vue();

        Vue.prototype.$LOADCSS =function(src) {
            var style  = document.createElement("link");
            style.setAttribute("rel", "stylesheet");
            style.setAttribute("type", "text/css");
            style.setAttribute("href", src);
            document.getElementsByTagName("head")[0].appendChild(style);
        };
        Vue.prototype.$LOADSCRIPT =function(src,callBackSuccess,callBackError) {
            var self=this;
            var messageAlert ={message:LOL_MESSAGES.LOADING,buttons:false};
            radio(window.PUBLIC_EVENTS_LOL.MESSAGE_ALERT.emitToModule).broadcast(messageAlert);
            var script  = document.createElement("script");
            script.setAttribute("src", src);
            script.addEventListener("load", function(){

                callBackSuccess();
            });
            document.getElementsByTagName("head")[0].appendChild(script);
        };
    };

    const error = { template: '<div class="component">Pagina non disponibile</div>' }
    window.router = new VueRouter({
        //routes:[{ path: '/', redirect: '/home' }] // short for routes: routes
        routes:[ { path: '/error', component: error },] // short for routes: routes

    })

    window.router.beforeEach(function(to, from, next) {
        console.log('-------beforeEach',from,to,'routerReady',routerReady)

        //next()

        if(to.matched.length==0 && to.path != "/"){
            console.log('***** 1 start load module:from:',from.path,'to:',to.path)

            $.getScript( locationPath+"src/sections"+to.path+"/index.js" )
                .done(function( script, textStatus ) {
                    console.log( '**** 2 end load module:',to.path,textStatus );
                   // next()

                })
                .fail(function( jqxhr, settings, exception ) {
                    console.error( 'load module:',to.path, exception );
                    //alert('contenuto non disponibile')
                    //if(from.path=="/"){
                    //    next('home')
                    //}else{
                    //    next(from.path)
                    //}
                    next('error')
                });
            // console.log('***** 2 start load module:',to.path)
           // next(false);
        }else{
            //console.log('beforeEach',to)
           // next();
        }


         next();
        // console.log('beforeEach,this:')
        //console.log('beforeEach', from)
        // console.log('beforeEach', next)
        // carico il compoente se non esiste e poi next() ????



    })

    var routerReady=false;
    window.router.onReady(function(){

        console.log('router.onReady*******',window.location.hash,'*');
        routerReady=true
        if(window.location.hash=='#/')window.router.push('home')
        //window.location.hash="#/home"
       // window.router.push('home')
    })




    const app = new Vue({
        router:router,
        watch:{
            '$route':function (to, from) {
                // react to route changes...
                //console.log('$$$$$$$',to)

            }
        }
    }).$mount('#app');



    function add(n){
        return n*n;
    }
  add('--')

}




