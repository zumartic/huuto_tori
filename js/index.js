function resultSearch() {
   $("#huuto").html('<embed src="https://cors-anywhere.herokuapp.com/http://www.huuto.net/hakutulos?words=' +$("#fleeSearch").val()  +'&area=" width="900" height="800">');
  $("#tori").html('<embed src="https://cors-anywhere.herokuapp.com/http://www.tori.fi/koko_suomi?q=' +$("#fleeSearch").val()  +'&cg=0&w=3" width="900" height="800">');
}
