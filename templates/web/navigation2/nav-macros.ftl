<#macro renderNavItem navItem>
 
  <#if navItem.url== '/'>
    
    <span><a href="#/home">${navItem.label}</a> - </span>
  <#else>
     
     <span><a href="#${navItem.url}">${navItem.label}</a> - </span>
  </#if>
   
 
</#macro>

<#macro renderRootItem navItem>
  <@renderNavItem navItem/>
</#macro>

<#macro renderNavItemWithSubItems navItem>
  <li>
    <span class="opener"><a href="${navItem.url}">${navItem.label}</a></span>
    
  </li>
</#macro>

<#macro renderNavSubItem navItem>
  <@renderNavItem navItem/>
</#macro>

<#macro renderNavSubItemWithSubItems navItem>
  <@renderNavItemWithSubItems navItem/>
</#macro>
