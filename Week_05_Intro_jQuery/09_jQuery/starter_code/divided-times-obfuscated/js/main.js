// eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('$(u).v(g(){$(\'#3-4 .l\').i(\'m\',g(e){e.t();$(\'#3-4 .l\').o().8(\'7\');$(\'#3-4 .l\').r(\'7\');9($(\'#3-4 .l\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.l\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.l\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}});$(\'#3-4 .k\').i(\'m\',g(e){e.t();$(\'#3-4 .k\').o().8(\'7\');$(\'#3-4 .k\').r(\'7\');9($(\'#3-4 .k\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.k\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.k\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}});$(\'#3-4 .n\').i(\'m\',g(e){e.t();$(\'#3-4 .n\').o().8(\'7\');$(\'#3-4 .n\').r(\'7\');9($(\'#3-4 .n\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.n\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.n\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}});$(\'#3-4 .j\').i(\'m\',g(e){e.t();$(\'#3-4 .j\').o().8(\'7\');$(\'#3-4 .j\').r(\'7\');9($(\'#3-4 .j\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.j\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.j\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}});$(\'#3-4 .h\').i(\'m\',g(e){e.t();$(\'#3-4 .h\').o().8(\'7\');$(\'#3-4 .h\').r(\'7\');9($(\'#3-4 .h\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.h\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.h\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}});$(\'#3-4 .p\').i(\'m\',g(e){e.t();$(\'#3-4 .p\').o().8(\'7\');$(\'#3-4 .p\').r(\'7\');9($(\'#3-4 .p\').c(\'7\')){9($(\'#1-2\').c(\'0\')){$(\'#1-2 .5.0\').b().8(\'0\');$(\'.5.p\').d().6(\'0\')}f{$(\'#1-2 .5\').b();$(\'.5.p\').d().6(\'0\');$(\'#1-2\').s(a).6(\'0\')}}f{$(\'#1-2\').q(a).8(\'0\')}})});',32,32,'open|slide|down|primary|nav|drop|addClass|active|removeClass|if|150|hide|hasClass|show||else|function|culture|on|technology|politics|international|click|business|siblings|blogs|slideUp|toggleClass|slideDown|preventDefault|document|ready'.split('|'),0,{}))

(function() { //protect the lemmings!

var lis = $( '#primary-nav li' );
var slideDown = $ ( '#slide-down' );

function lisClicked ( e ) {
	e.preventDefault();
	var me = $( this );
	lis.removeClass ( 'active');
	me.addClass( 'active' );
	var classKey = me.attr( 'class' )
	
	var section = slideDown.find( '.'+classKey );
	console.log( section );
}
lis.click( lisClicked );

})()