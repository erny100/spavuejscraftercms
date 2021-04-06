/**
 * Created by Ernesto  on 09/06/2017.
 */

(function(){
    var path = locationPath+"src/sections/home/";
    /// components
    //$.getScript( path+"comp1/index.js" )
    //    .done(function( script, textStatus ) {
    //        console.log( 'comp1/index:',textStatus );
    //
    //
    //    })
    //    .fail(function( jqxhr, settings, exception ) {
    //        console.error( 'load comp1/index:', exception );
    //    });
    $.getScript( path+"comp1/index.js" )
        .done(function( script, textStatus ) {
            console.log( 'comp1/index:',textStatus );


        })
        .fail(function( jqxhr, settings, exception ) {
            console.error( 'load comp1/index:', exception );
        });


    var component = Vue.component('home', function (resolve, reject) {

        Vue.http({url:path+'template.html', method: 'GET'}).then(function (response) {
            resolve({
                template: response.data,
                data: function () {
                    return {
                        name:'home'
                    }
                },
                created:function(){
                    console.log('created:',this.name);


                },
                beforeRouteEnter:function (to, from, next) {
                    console.log('beforeRouteEnter-----',this.name)
                    // called before the route that renders this component is confirmed.
                    // does NOT have access to `this` component instance,
                    // because it has not been created yet when this guard is called!
                    next()
                },
                beforeRouteUpdate:function (to, from, next) {
                    console.log('beforeRouteUpdate-----',this.name)
                    // called when the route that renders this component has changed,
                    // but this component is reused in the new route.
                    // For example, for a route with dynamic params /foo/:id, when we
                    // navigate between /foo/1 and /foo/2, the same Foo component instance
                    // will be reused, and this hook will be called when that happens.
                    // has access to `this` component instance.
                    next()
                },
                beforeRouteLeave:function (to, from, next) {
                    console.log('beforeRouteLeave-----',this.name)
                    // called when the route that renders this component is about to
                    // be navigated away from.
                    // has access to `this` component instance.
                    next()
                }
            })
        }, function (response) {
            // error callback
            console.error('ERROR_LOAD ');
        });

    });

    function beforeEnterFn(router,redirect,next){
         console.log('beforeEnterFn',router,redirect,next)
        next()
    }

    function beforeRouteLeaveFn(router,redirect,next){
        console.log('beforeRouteLeaveFn',router,redirect,next)
        next()
    }
   window.router.addRoutes([{ path: '/home', component: component }])
})();


