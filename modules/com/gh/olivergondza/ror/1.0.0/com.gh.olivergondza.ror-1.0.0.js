(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/1.0.0"],"$mod-name":"com.gh.olivergondza.ror","$mod-version":"1.0.0","$mod-bin":"6.0","com.gh.olivergondza.ror":{"$pkg-shared":"1","evaluate":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"form"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"prm","$nm":"output"}]],"$mt":"mthd","$an":{"shared":[],"doc":["WS+ Ma.FC'.C.FDo 2 (H),Art,Cg P 5,5 GHR"]},"$nm":"evaluate"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl1=require('ceylon/language/1.0.0/ceylon.language-1.0.0');
$$$cl1.$addmod$($$$cl1,'ceylon.language/1.0.0');
exports.$mod$ans$=[];
exports.$pkg$ans$com$gh$olivergondza$ror=function(){return[$$$cl1.shared()];};
function evaluate(form$2,output$3){
    /*Begin dynamic block*/
    var q$4=(tmpvar$5=(opt$6=form$2.elements[$$$cl1.String("q",1)].value.trimmed,opt$6!==null?opt$6:$$$cl1.String("",0)),$$$cl1.isOfType(tmpvar$5,{t:$$$cl1.String})?tmpvar$5:$$$cl1.throwexc($$$cl1.Exception($$$cl1.String("dynamic objects cannot be used here")),'4:19-4:60','run.ceylon'));
    $prop$getQ$4={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.String},d:['com.gh.olivergondza.ror','evaluate','$at','q']};}};
    $prop$getQ$4.get=function(){return q$4};
    if(q$4.equals($$$cl1.String("",0))){
        return;
    }output$3.innerHTML=$$$cl1.StringBuilder().appendAll([$$$cl1.String("output ",7),q$4.string]).string.valueOf();
    /*End dynamic block*/
    var opt$6;
}
exports.evaluate=evaluate;
evaluate.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl1.Anything},$ps:[{$nm:'form',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}},{$nm:'output',$mt:'prm',$t:{t:$$$cl1.Anything},$an:function(){return[];}}],$an:function(){return[$$$cl1.doc($$$cl1.String("WS+ Ma.FC\'.C.FDo 2 (H),Art,Cg P 5,5 GHR",39)),$$$cl1.shared()];},d:['com.gh.olivergondza.ror','evaluate']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
