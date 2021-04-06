/**
 * Created by Ernesto  on 09/06/2017.
 */

(function(){
    var component = Vue.component('comp1', function (resolve, reject) {
        Vue.http({url:'src/sections/home/comp1/template.html', method: 'GET'}).then(function (response) {
            resolve({
                template: response.data,
                data: function () {
                    return {
                        name:'comp1'
                    }
                },
                created:function(){
                    console.log('created:',this.name);
                }
            })
        }, function (response) {
            // error callback
            console.error('ERROR_LOAD ');
        });

    });
})();


