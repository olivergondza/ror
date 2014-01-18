"WS+ Ma.FC'.C.FDo 2 (H),Art,Cg P 5,5 GHR"
shared void evaluate(dynamic form, dynamic output) {
    dynamic {
        String q = form.elements["q"].\ivalue.trimmed else "";
        if (q == "") { return; }

        output.innerHTML = "output ``q``";
    }
}

//"Redirect to ?<query> URL."
//shared void submit(dynamic form) {
//    dynamic {
//        String q = form.elements["q"].\ivalue.trimmed else "";
//        if (q == "") { return; }
//
//        window.location.href = document.\iURL.replace(RegExp("\\?.*"), "") + "?" + q;
//    }
//}

//String query {
//    dynamic {
//        return document.\iURL.indexOf("?") == -1
//                then ""
//                else document.\iURL.replace(RegExp(".*\\?"), "")
//        ;
//    }
//}
