<#import "/templates/system/common/cstudio-support.ftl" as studio />
<#import "/templates/web/navigation2/navigation.ftl" as nav/>





<!DOCTYPE html>
<html lang="en">
	<head>
      <meta charset="utf-8">
      <title>${model.title_t}</title>
      <script src="static-assets/js/jquery-ajax-2.0.0.min.js"></script>
      <script src="static-assets/js/vue.js"></script>
      <script src="static-assets/js/vue-router.js"></script>
    <script src="static-assets/js/vue-resource.min.js"></script>

    <script type="application/javascript" src="static-assets/src/app.js"></script>
    <style>
        .component{
            border: 1px solid cadetblue;
            width: 200px;
            height: 200px;
        }
        .section{
            border: 1px solid #d3d3d3;

        }
        .fade-enter-active, .fade-leave-active {
            transition-property: opacity;
            transition-duration: .25s;
        }

        .fade-enter-active {
            transition-delay: .25s;
        }

        .fade-enter, .fade-leave-active {
            opacity: 0
        }
    </style>
	</head>
	
	
	<body>

<div id="app">
    <header>
        <div><span><a href="#/home">home</a> - </span><span><a href="#/page1">page1</a> - </span><span><a href="#/page2">page2</a> - </span><span><a href="#/page3">page3</a></span></div>
    </header>
    <div> 
    
	

   <ul>
			
		<!--@nav.renderNavigation "/site/website", 1, true /-->
		       
      </ul>
      
     
    
    </div>
    <transition name="fade" >
        <keep-alive>
            <router-view ></router-view>
        </keep-alive>
    </transition>
    <footer>

    </footer>

</div>
	<@studio.toolSupport/>	
</body>
</html>
</html>

