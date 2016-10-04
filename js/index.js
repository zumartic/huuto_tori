function resultSearch() {
   $("#huuto").html('<embed src="http://www.huuto.net/hakutulos?words=' +$("#fleeSearch").val()  +'&area=" width="900" height="800">');
  $("#tori").html('<embed src="http://www.tori.fi/koko_suomi?q=' +$("#fleeSearch").val()  +'&cg=0&w=3" width="900" height="800">');
}
