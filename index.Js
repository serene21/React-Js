// Create an Array of mock Data
const data = [
  {
    id: 1,
    title: "My 2024 MacBook Setup for Software Development",
    subtitle:
      "Here’s an insight into my setup, workflow and tools to build software",
    UserName: "Anthony Gordon",
    time: "4 min read ",
    date: "Jun 14, 2023",
    claps: 0
  },
  {
    id: 2,
    title: "Git + Bit: Code Meets Components",
    subtitle:
      "Keeping Git Branches and Bit lanes in sync for seamless development",
    UserName: "Ashan Fernando",
    time: "6 min read ",
    date: "Aug 29, 2024",
    claps: 0
  },
  {
    id: 3,
    title: " Average Manaager Vs Great Manager",
    subtitle: "Explained in 10 sketches",
    UserName: "Ashan Fernando",
    time: "45 min read ",
    date: "Mai 19, 2024",
    claps: 0
  },
  {
    id: 4,
    title: " Comment J'ai commencer l'entreprenariat",
    subtitle: "Je vendais les yaourt avec beignets.",
    UserName: "Ulrich Fonkwa",
    time: "45 min read ",
    date: "July 08, 2024",
    claps: 0
  },
  {
    id: 5,
    title: " How I Gave My life to christ",
    subtitle: "the life changing experience",
    UserName: "Merveille Mbeupeu",
    time: "3 min read ",
    date: "Jan 11, 2024",
    claps: 0
  }
];

// if we create many replicates, on clicking on the claps button, of both, only the first one is changed. So this method is not modularsed.

// Create App and Post

// function App() {
//   return `<div class="container">
//       ${data.map((item) => Post(item)).join("")}
//    </div>`;
// }

// function Post(props) {
//   //const [initialClap, addClp] = useStates(props.claps);

//   const [post, setPost] = root.useStates(props);
//   postHandler = () => {
//     setPost({ ...post, claps: post.claps + 1 });
//     setPost((prevState) => {
//       return { ...prevState, claps: prevState.claps + 1 };
//     });
//   };
//   let handler = () => addClp(initialClap + 1);
//   const event = {
//     id: `claps-${props.id}`,
//     type: "click",
//     postHandler
//   };
//   root.registerEvent(event);

//   return `

//           <div class="post-header">
//               <div class="title">${props.title}</div>
//               <div class="subtitle">${props.subtitle}</div>
//               <div class="author-card">
//                   <div class="avatar">
//                       <img src="assets/images/profile-picture.jpg"  height="44px"  width="44px"  alt="" />
//                   </div>
//                   <div class="column">
//                      <div class="row">
//                          <div>${props.UserName}</div>
//                          <div>.</div>
//                          <div class="follow-button " > Follow</div>
//                      </div>

//                      <div class="row secondary">
//                          <div>${props.time}</div>
//                          <div>.</div>
//                          <div>${props.date}</div>
//                      </div>

//                   </div>

//               </div>
//               <div class="actions">
//                   <div class="claps">
//                       <div  id ="claps-${props.id}" class="clap-button" >
//                           <img class="avatar" src="assets/icons/hands-clapping-thin.svg" height="44px"  width="44px" alt="" />
//                       </div>
//                       <div class="clap-counter" id="clap-counter-${props.id}">${post.claps}</div>

//                   </div>
//               </div>
//           </div>

//     `;
// }

// modify render function to reset

data2 = [
  {
    id: 1,
    title: "Hey everyone",
    subtitle: "What's up with y'all",
    useName: "I'm Daizy",
    count: 0
  },
  {
    id: 2,
    title: "Hey everyone",
    subtitle: "What's up with y'all",
    useName: "I'm Daizy",
    count: 0
  },
  {
    id: 3,
    title: "Hey everyone",
    subtitle: "What's up with y'all",
    useName: "I'm Daizy",
    count: 0
  },
  {
    id: 4,
    title: "Hey everyone",
    subtitle: "What's up with y'all",
    useName: "I'm Daizy",
    count: 0
  },
  {
    id: 5,
    title: "Hey everyone",
    subtitle: "What's up with y'all",
    userName: "I'm Daizy",
    count: 0
  }
];

function App() {
  return `<div class="container">
      ${data2.map((item) => myPBlog(item)).join("")}
   </div>`;
}

function myPBlog(blog) {
  const [hi, setHi] = root.useStates(blog);
  postHandler = () => {
    setHi((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  };
  root.registerEvent({
    id: `hi-${blog.id}`,
    type: "click",
    postHandler
  });

  return `
        <div class="post-header">
               <div class="title">${blog.title}</div>
               <div class="subtitle">${blog.subtitle}</div>
               <div class="author-card">
                   <div class="avatar">
                       <img src="assets/images/profile-picture.jpg"  height="44px"  width="44px"  alt="" />
                   </div>
                   <div class="column">
                      <div class="row">
                          <div>${blog.useName}</div>
                          <div>.</div>
                          <div class="follow-button " > Follow</div>
                      </div> 
                     </div>
                  
               </div>
              <div class="actions">
                   <div class="claps">
                       <div  id ="hi-${blog.id}" class="clap-button" >
                           <img class="avatar" src="assets/icons/hands-clapping-thin.svg" height="44px"  width="44px" alt="" />
                       </div>
                       <div class="clap-counter" >${hi.count}</div>
                      
                  </div>
             </div>
          </div>
  `;
}

function createRoot(root) {
  const mainRoot = root;

  let hooks = [];
  let hooksPointer = 0;
  let eventHandler = [];

  let rootNode;

  function useStates(init) {
    const currentIndex = hooksPointer;

    if (!hooks[currentIndex]) {
      if (typeof init === "function") {
        const result = init(hooks[currentIndex]);
        hooks[currentIndex] = result;
      } else {
        hooks[currentIndex] = init;
      }
    }
    function setState(newState) {
      if (typeof newState === "function") {
        const result = newState(hooks[currentIndex]);
        hooks[currentIndex] = result;
      } else {
        hooks[currentIndex] = newState;
      }
      render(App);
    }
    hooksPointer++;
    return [hooks[currentIndex], setState];
  }

  function registerEvent(newEvent) {
    eventHandler.push(newEvent);
  }

  function render(node) {
    hooksPointer = 0;
    eventHandler = [];

    if (!rootNode && node) {
      rootNode = node;
    }
m
    mainRoot.innerHTML = rootNode();
    eventHandler.forEach((item) => {
      document
        .getElementById(item.id)
        .addEventListener(item.type, item.postHandler);
    });
  }

  return { useStates, registerEvent, render };
}

const root = createRoot(document.getElementById("app"));

root.render(App);

// document.getElementById("app").innerHTML = render();
// render();
// Use map to print all posts of the Array using the render function.

// create A.state.property
// Change the add function thereby changing their Usage.
