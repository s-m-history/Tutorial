(()=>{

  class Accordion {
    //初期化
    
    constructor(obj){
      console.log(obj);
      
      const $elm = document.querySelector(obj.hookName);
      const $trigger = $elm.getElementsByTagName(obj.tagName);
      
      
      const $triggerLen = $trigger.length;
      let index = 0;
      while(index < $triggerLen){
        $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
        index++;
      };
      
    };
    clickHandler = (e) => {
      e.preventDefault();
      
      const $target = e.currentTarget;
      const $content = $target.nextElementSibling;
      console.log($content);
      
      if ($content.style.display === 'block') {
        $content.style.display = 'none';
      } else {
        $content.style.display = 'block';
      };
      
    };
  };

  const noobAccordion = new Accordion({
    hookName : '#js-aco',
    tagName : 'p',
  });
  const eee = new Accordion({
    hookName : '#js-bco',
    tagName : 'a',
  });
  const test1 = new Accordion({
    hookName : '#js-tpo',
    tagName : 'a',
  });
  const trust = new Accordion({
    hookName : '#js-222',
    tagName : 'a',
  });
  
  
})();