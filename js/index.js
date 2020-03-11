const init = function() {
  var log = console.log;
  let imgCaro = ["crocodiles", "lions", "fruits"];
  async function getUserAsync() {
    let respon = await fetch(
        `
	    https://pixabay.com/api/?key=15331673-5083937f2aa58615a0011044b&q=
	    ${imgCaro[Math.floor(Math.random() * imgCaro.length)]}&
	    image_type=photo
	`
      ),
      data = await respon.json();
    return data;
  }
  getUserAsync().then(data => {
    let Append = new AppendElement(),
      cssText = new addStylesCSS(),
      caro = document.querySelector("#carousel"),
      countImg = 0;
    if (caro) {
      let wrapContent = document.createElement("div"),
        wrapImg = CreateElement([], 5, "div"),
        arrows = CreateElement([], 2, "div"),
        wrapws = CreateElement([], 2, "div"),
        checkBoxs = CreateElement([], 5, "div"),
        wrapAllCheck = document.createElement("div"),
        img = CreateElement([], 5, "div");
      caro.appendChild(wrapContent);
      Append.first(wrapContent, wrapImg);
      Append.first(wrapContent, wrapws);
      Append.second(wrapws, arrows);
      Append.second(wrapImg, img);
      wrapContent.appendChild(wrapAllCheck);
      Append.first(wrapAllCheck, checkBoxs);
      setIds(["left", "right"], wrapws);
      setIds(
        ["check-1", "check-2", "check-3", "check-4", "check-5"],
        checkBoxs
      );
      const animationCaro = (first, second, control) => {
        cssText.ArrCSS(first, wrapImg.RetArrFromOnlyPlace(countImg, countImg));
        control === "add"
          ? (countImg += 1)
          : control === "sub"
          ? (countImg -= 1)
          : console.log('only is permitted "add" or "sub"');
        cssText.ArrCSS(second, wrapImg.RetArrFromOnlyPlace(countImg, countImg));
      };
      const animInterval = () => {
        if (countImg === 4) {
          for (let i = 0; i < 5; i++) {
            if (countImg === 0) countImg = 1;
            animationCaro(
              {
                style: `left:-115%;`
              },
              {
                style: `bottom:0%;`
              },
              "sub"
            );
          }
        }
        animationCaro(
          {
            style: `bottom: 100%;`
          },
          {
            style: `left: 0%;`
          },
          "add"
        );
      };
      let controlAnim = window.setInterval(animInterval, 4000);
      cssText.withoutArr(
        {
          style: `
		    position:absolute;
		    width: 35%;
		    height: 5%;
			top:80%;
			left:33%;
			background:transparent;
		`
        },
        wrapAllCheck
      );
      cssText.ArrCSS(
        {
          style: `
		position: relative;
		width: 5%;
		height: 50%;
		margin:0% 15% 10% 0%;
		left: 8%;
		top: 20%;
		display: inline-block;
		background: #fff;
		border-radius: 50%;
		cursor:pointer;
		`
        },
        checkBoxs
      );
      cssText.withoutArr(
        {
          style: `
		    position: fixed;
		    width: 100%;
		    height: 80%;
		    background: #000;
		    overflow:hidden;
		`
        },
        caro
      );
      cssText.withoutArr(
        {
          style: `
			position:absolute;
			width: 60%;
			height: 100%;
			left: 20%;
			overflow:hidden;
		`
        },
        wrapContent
      );
      cssText.ArrCSS(
        {
          style: `
			position: absolute;
			width: 100%;
			height: 100%;
			left:0%;
			bottom:0%;
			right:0%;
			transition-property:left right bottom;
			transition-timing-function: ease;
			transition-duration: 0.5s;
		`
        },
        wrapImg
      );
      cssText.ArrCSS(
        {
          style: `
			position: absolute;
			width: 100%;
			height: 100%;
		`
        },
        img,
        function() {
          return `
			background: url(${
        data.hits[Math.floor(Math.random() * data.hits.length)].webformatURL
      });
			background-repeat: no-repeat;
			background-size: 100% 100%;
		`;
        },
        img
      );
      cssText.ArrCSS(
        {
          style: `
			left: 115%;
		`
        },
        wrapImg.RetArrFromOnlyPlace(2)
      );
      cssText.ArrCSS(
        {
          style: `
			left: -115%;
		`
        },
        wrapImg.RetArrFromOnlyPlace(1, 1)
      );
      cssText.ArrCSS(
        {
          style: `
			position:absolute;
			width:4%;
			height:7%;
			background:transparent;
			border-radius:50%;
			border: 2px #fff solid;
			top:45%;
			cursor:pointer;
			transition:background 0.5s ease;
		`
        },
        wrapws,
        function(index) {
          let style = ["0%", "95.3%"];
          return `
			left: ${style.RetArrFromOnlyPlace(index, index, false, true)};
		`;
        },
        wrapws
      );
      cssText.ArrCSS(
        {
          style: `
			position:absolute;
			top:30%;
			border: #fff solid;
			border-width: 0px 5px 5px 0px;
			transition: border 0.5s ease;
			display:inline-block;
			padding:5px;
		`
        },
        arrows,
        function(index) {
          let rotation = ["rotate(135deg)", "rotate(-45deg)"];
          let left = ["35%", "25%"];
          return `
			transform: ${rotation.RetArrFromOnlyPlace(index, index)};
			left: ${left.RetArrFromOnlyPlace(index, index)};
		`;
        },
        arrows
      );
      wrapws.forEach(e =>
        e.addEventListener("mouseover", event => {
          cssText.withoutArr(
            {
              style: `
				background:#fff;
			`
            },
            event.currentTarget
          );
          if (event.currentTarget.id === "left") {
            cssText.withoutArr(
              {
                style: `
				border: #000 solid;
			    border-width: 0px 5px 5px 0px;
			  `
              },
              arrows[0]
            );
          }
          if (event.currentTarget.id === "right") {
            cssText.withoutArr(
              {
                style: `
				border: #000 solid;
				border-width: 0px 5px 5px 0px;
			  `
              },
              arrows[1]
            );
          }
        })
      );
      wrapws.forEach(e =>
        e.addEventListener("mouseleave", event => {
          cssText.withoutArr(
            {
              style: `
				background:transparent;
			`
            },
            event.currentTarget
          );
          if (event.currentTarget.id === "left") {
            cssText.withoutArr(
              {
                style: `
				border: #fff solid;
				border-width: 0px 5px 5px 0px;
			  `
              },
              arrows[0]
            );
          }
          if (event.currentTarget.id === "right") {
            cssText.withoutArr(
              {
                style: `
				border: #fff solid;
				border-width: 0px 5px 5px 0px;
			  `
              },
              arrows[1]
            );
          }
        })
      );
      wrapws.forEach(e =>
        e.addEventListener("click", event => {
          clearInterval(controlAnim);
          controlAnim = window.setInterval(animInterval, 4000);
          if (event.currentTarget.id == "right") {
            if (countImg === 4) countImg = 3;
            animationCaro(
              {
                style: `bottom: 100%;`
              },
              {
                style: `left: 0%;`
              },
              "add"
            );
          }
          if (event.currentTarget.id == "left") {
            if (countImg === 0) countImg = 1;
            animationCaro(
              {
                style: `left:-115%;`
              },
              {
                style: `bottom:0%;`
              },
              "sub"
            );
          }
        })
      );
      checkBoxs.iterator((element, index) => {
        element.addEventListener("click", e => {
          clearInterval(controlAnim);
          controlAnim = window.setInterval(animInterval, 4000);
          switch (e.currentTarget.id) {
            case "check-1":
              for (let i = 0; i < 5; i++) {
                if (countImg === 0) countImg = 1;
                animationCaro(
                  {
                    style: `left:-115%;`
                  },
                  {
                    style: `bottom:0%;`
                  },
                  "sub"
                );
              }
              break;
            case "check-2":
              if (countImg < 1) {
                for (let i = 1; i > countImg; i--) {
                  animationCaro(
                    {
                      style: `bottom: 100%;`
                    },
                    {
                      style: `left: 0%;`
                    },
                    "add"
                  );
                }
              }
              if (countImg > 1) {
                for (let i = countImg; i > 1; i--) {
                  animationCaro(
                    {
                      style: `left:-115%;`
                    },
                    {
                      style: `bottom:0%;`
                    },
                    "sub"
                  );
                }
              }
              break;
            case "check-3":
              if (countImg < 2) {
                for (let i = countImg; countImg < 2; i++) {
                  animationCaro(
                    {
                      style: `bottom: 100%;`
                    },
                    {
                      style: `left: 0%;`
                    },
                    "add"
                  );
                }
              }
              if (countImg > 2) {
                log(countImg);
                for (let i = countImg; i > 2; i--) {
                  animationCaro(
                    {
                      style: `left:-115%;`
                    },
                    {
                      style: `bottom:0%;`
                    },
                    "sub"
                  );
                }
              }
              break;
            case "check-4":
              if (countImg < 3) {
                for (let i = countImg; countImg < 3; i++) {
                  animationCaro(
                    {
                      style: `bottom: 100%;`
                    },
                    {
                      style: `left: 0%;`
                    },
                    "add"
                  );
                }
              }
              if (countImg > 3) {
                for (let i = countImg; i > 3; i--) {
                  animationCaro(
                    {
                      style: `left:-115%;`
                    },
                    {
                      style: `bottom:0%;`
                    },
                    "sub"
                  );
                }
              }
              break;
            case "check-5":
              for (let i = 0; i < 5; i++) {
                if (countImg === 4) countImg = 3;
                animationCaro(
                  {
                    style: `bottom: 100%;`
                  },
                  {
                    style: `left: 0%;`
                  },
                  "add"
                );
              }
              break;
            default:
              alert(e.currentTarget.id);
              break;
          }
        });
      });
    }
    return data;
  });
};
