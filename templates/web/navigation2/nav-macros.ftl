<#macro renderNavItem navItem>
  <li><a class="a" href="#${navItem.url}">${navItem.label}</a></li>
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
