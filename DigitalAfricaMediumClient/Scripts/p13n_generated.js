var RR = RR || {}; RR.data={"JSON":{"placements":[]}};  if(R3_COMMON.placementType === "|category_page.mag_most_popular"){   R3_CATEGORY.id = "232304"; }  RR.fixName = function (a){   var b=a;   if(typeof b == "string"){     if(b.indexOf("&")>-1){       b=b.replace(/&/g,"&")     }     if(b.indexOf("'")>-1){       b=b.replace(/'/g,"'")     }     return b   } else {   	return b     } };var rr_remote_data='eF5j4cotK8lM4TM3tNA11DVkKU32MEg0SrGwTE7SNbcwMdc1sTRP0TUxME3UNTMzNU9OTTRKSjNLAQCEKg5D';var rr_recs={placements:[{used:false,placementType:'home_page.red_strip_engage',html:''},{used:false,placementType:'home_page.subscribe_now_footer_engage',html:''},{used:false,placementType:'home_page.topbar_subscribe_engage',html:''}]},rr_call_after_flush=function(){ var link = "%26cm_vc=rr_"+rr_recs.placements["0"].placementType;    RR.data.JSON.placements.push({   "name": rr_recs.placements["0"].placementType,   "type": "json",   "heading": "<strong>Subscribe</strong><span class=\'hide-for-small font-light\'><strong> + Save!</strong></span>",   "link": "http://recs.richrelevance.com/rrserver/click?a=dae139408f447afd&vg=7d576948-fa42-4ddd-4a14-1857cea15c1f&pti=9&pa=red_strip_engage&hpi=10407&rti=2&sgs=&u=ECA93CE73A859AD2E21D4AA0A8D0EF49&mvtId=-1&mvtTs=1508516345296&uguid=0a2d89cb-7847-497d-405a-6657cea2bf6d&channelId=WEB&userAttribute=state%3Aguest%7CtimeSinceLastVisit%3A58&s=81661705FC19D7F23F32A53D74DDDDD5&pg=-1&p=content__41&ct=https%3A%2F%2Fw1.buysub.com%2Fservlet%2FConvertibleGateway%3Fcds_mag_code%3DHVR%26cds_page_id%3D203760%26cds_response_key%3DI74ADEFC"+link });       var link = "%26cm_vc=rr_"+rr_recs.placements["1"].placementType;  RR.data.JSON.placements.push({   "name": rr_recs.placements["1"].placementType,   "type": "json",   "heading": "<strong class=\'primary-color\'>Subscribe Today + Save!</strong>",   "link": "http://recs.richrelevance.com/rrserver/click?a=dae139408f447afd&vg=7d576948-fa42-4ddd-4a14-1857cea15c1f&pti=9&pa=subscribe_now_footer_engage&hpi=10408&rti=2&sgs=&u=ECA93CE73A859AD2E21D4AA0A8D0EF49&mvtId=-1&mvtTs=1508516345296&uguid=0a2d89cb-7847-497d-405a-6657cea2bf6d&channelId=WEB&userAttribute=state%3Aguest%7CtimeSinceLastVisit%3A58&s=81661705FC19D7F23F32A53D74DDDDD5&pg=-1&p=content__42&ct=https%3A%2F%2Fw1.buysub.com%2Fservlet%2FConvertibleGateway%3Fcds_mag_code%3DHVR%26cds_page_id%3D203760%26cds_response_key%3DI74ADEFC" + link });  var link = "%26cm_vc=rr_"+rr_recs.placements["2"].placementType;    RR.data.JSON.placements.push({   "name": rr_recs.placements["2"].placementType,   "type": "json",   "heading": "Subscribe",   "link": "http://recs.richrelevance.com/rrserver/click?a=dae139408f447afd&vg=7d576948-fa42-4ddd-4a14-1857cea15c1f&pti=9&pa=topbar_subscribe_engage&hpi=10406&rti=2&sgs=&u=ECA93CE73A859AD2E21D4AA0A8D0EF49&mvtId=-1&mvtTs=1508516345296&uguid=0a2d89cb-7847-497d-405a-6657cea2bf6d&channelId=WEB&userAttribute=state%3Aguest%7CtimeSinceLastVisit%3A58&s=81661705FC19D7F23F32A53D74DDDDD5&pg=-1&p=content__40&ct=https%3A%2F%2Fw1.buysub.com%2Fservlet%2FConvertibleGateway%3Fcds_mag_code%3DHVR%26cds_page_id%3D203760%26cds_response_key%3DI74ADEFC"+ link }); if(typeof RR.jsonCallback === "function"){   RR.jsonCallback(); }};rr_flush=function(){if(rr_onload_called){if(RR.defaultCallback){RR.defaultCallback(rr_recs);}else{rr_placements=[];var p=rr_recs.placements,h,i;for(i=0;i<p.length;i++){rr_placements[i]=[(p[i].used?1:0),p[i].placementType,p[i].html];}for(i=0;i<rr_placement_place_holders.length;i++){h=document.getElementById('rr_placement_'+i);if(h&&typeof h!='undefined'){rr_insert_placement(h,rr_placement_place_holders[i]);}}}rr_call_after_flush();}};rr_flush();