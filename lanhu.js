(function(window){
    function setSize(max,unti){
        var config = {};
        for(i=0;i<max;i++){
            config[i]=`${i}${unti}`
        }
        return config;
    }

   window.tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
        },
        width: setSize(2000,'px'),
        height: setSize(5000,'px'),
        fontSize: setSize(100,'px'),
        lineHeight: setSize(500,'px'),
        backgroundImage: {
            'first':"url('/images/组 1(1).png')",
            "second": "url('/images/组 1.png')",
            "third": "url('/images/组 2.png')",
            "fourth": "url('/images/组 3.png')",
            "fifth": "url('/images/组 4.png')",
            "sixth": "url('/images/组 5.png')",
            "seventh": "url('/images/组 6.png')",
        }
      }
    }
  } 
})(window)