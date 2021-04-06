<#import "/templates/system/common/cstudio-support.ftl" as studio />

<div>

 name controller js : {{name}}<br>
	    ------------------- CMS ---------------<br>
internal-name:${contentModel["internal-name"]}<br>
placeInNav:${contentModel.placeInNav}<br>
navLabel:${contentModel.navLabel}<br>
title_t:${contentModel.title_t}<br>
      
    	<div <@studio.iceAttr iceGroup="main"/>>
            ${model.edit_html}----
        </div>
          ----------------------------------
        	
	</div>
<@studio.toolSupport/>	