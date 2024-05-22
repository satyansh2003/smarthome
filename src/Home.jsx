import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { create } from "zustand";
import { IoMdCloseCircle } from "react-icons/io";
import WebCam from "react-webcam";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
  BsLightbulbFill,
  BsMusicNote,
  BsSnow,
  BsCamera,
  BsCamera2,
  BsCameraVideo,
  BsCameraVideoFill,
} from "react-icons/bs";

import { IoTrashBin } from "react-icons/io5";

function Home() {
  



  const {
    isFirst,
    isSecont,
    isThird,
    setFirst,
    setSecont,
    setThird,
    setFourth,
    isFourth,
  } = useGlobalState();
  const ref_2 = React.useRef(null);
  const [SliderWindowArray, setSliderWindowArray] = React.useState([
    "Living Room",
    "Bed Room 1",
    "Bed Room 2",
  ]);

  const BoxRef = React.useRef(null);
  const BoxRef_3 = React.useRef(null);
  const BoxRef_2 = React.useRef(null);
  const [MusicArray, setMusicArray] = React.useState([
    "Hall Speaker",
    "Bed Room Speaker",
    "Bed Room 2",
  ]);

  const [TempArray, setTempArray] = React.useState([
    "Bed Room",
    "Bed Room 2",
    "Hall",
  ]);


const data = [
    {
      name: "Lights",
      uv: SliderWindowArray.length * 1000,
      pv: Math.random() * 1088
    },
    {
      name: "Music",
      uv: MusicArray.length * 1000 + Math.random() * 1000,
      pv: Math.random() * 1000,
      amt: 2210,
    },
    {
      name: "Temperature",
      uv: TempArray.length + Math.random() * 1000,
      pv: Math.random() * 3000,
      amt: 2290,
    },
  ];

  return (
    <main className="main-container">
      <AnimatePresence>
        {isFirst && (
          <motion.div
            animate={{
              height: `${SliderWindowArray.length * 7}rem`,
              bottom: "0rem",
            }}
            initial={{ height: "0rem", bottom: "-10rem" }}
            exit={{ height: "0rem", bottom: "-10rem" }}
            transition={{
              height: { duration: 1, ease: [0.85, 0, 0.15, 1] },
              top: { duration: 1, delay: 0.1, ease: [0.85, 0, 0.15, 1] },
            }}
            style={{
              background: "white",
              position: "absolute",
              width: "25rem",
              bottom: "0%",
              right: "0%",
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
              transformOrigin: "center center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              overflow: "hidden",
              padding: "1rem",
            }}
          >
            {SliderWindowArray.map((item, index) => {
              return (
                <SliderWindow
                  array={SliderWindowArray}
                  setArray={setSliderWindowArray}
                  Text={item}
                  key={index}
                />
              );
            })}

            <div
              style={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <input
                ref={BoxRef}
                type="text"
                style={{
                  flex: 1,
                  padding: "1rem",
                  color: "black",
                  borderRadius: "0.5rem",
                  outline: "none",
                }}
              />
              <button
                onClick={() => {
                  if (SliderWindowArray.length <= 5)
                    setSliderWindowArray((prev) => [
                      ...prev,
                      BoxRef.current.value,
                    ]);
                  else setError(ture);
                }}
                style={{ padding: "1rem", borderRadius: "1rem" }}
              >
                Add More
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSecont && (
          <motion.div
            animate={{ height: `${MusicArray.length * 8}rem`, bottom: "0rem" }}
            initial={{ height: "0rem", bottom: "-10rem" }}
            exit={{ height: "0rem", bottom: "-10rem" }}
            transition={{
              height: { duration: 1, ease: [0.85, 0, 0.15, 1] },
              top: { duration: 1, delay: 0.1, ease: [0.85, 0, 0.15, 1] },
            }}
            style={{
              height: "100vh",
              background: "white",
              position: "absolute",
              width: "25rem",
              bottom: "0%",
              right: "0%",
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
              transformOrigin: "center center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              overflow: "hidden",
              padding: "1rem",
            }}
          >
            {MusicArray.map((item, index) => {
              return (
                <Music
                  array={MusicArray}
                  setArray={setMusicArray}
                  Text={item}
                />
              );
            })}

            <div
              style={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <input
                ref={BoxRef_2}
                type="text"
                style={{
                  flex: 1,
                  padding: "1rem",
                  color: "black",
                  borderRadius: "0.5rem",
                  outline: "none",
                }}
              />
              <button
                onClick={() => {
                  if (MusicArray.length <= 5)
                    setMusicArray((prev) => [...prev, BoxRef_2.current.value]);
                }}
                style={{ padding: "1rem", borderRadius: "1rem" }}
              >
                Add More
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isThird && (
          <motion.div
            animate={{ height: `${TempArray.length * 7}rem`, bottom: "0rem" }}
            initial={{ height: "0rem", bottom: "-10rem" }}
            exit={{ height: "0rem", bottom: "-10rem" }}
            transition={{
              height: { duration: 1, ease: [0.85, 0, 0.15, 1] },
              top: { duration: 1, delay: 0.1, ease: [0.85, 0, 0.15, 1] },
            }}
            style={{
              height: "100vh",
              background: "white",
              position: "absolute",
              width: "25rem",
              bottom: "0%",
              right: "0%",
              borderTopLeftRadius: "0.5rem",
              borderTopRightRadius: "0.5rem",
              transformOrigin: "center center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              overflow: "hidden",
              padding: "1rem",
            }}
          >
            {TempArray.map((item, index) => {
              return (
                <Temperature
                  Text={item}
                  array={TempArray}
                  setArray={setTempArray}
                />
              );
            })}
            <div
              style={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <input
                ref={BoxRef_3}
                type="text"
                style={{
                  flex: 1,
                  padding: "1rem",
                  color: "black",
                  borderRadius: "0.5rem",
                  outline: "none",
                }}
              />
              <button
                onClick={() => {
                  if (TempArray.length <= 5)
                    setTempArray((prev) => [...prev, BoxRef_3.current.value]);
                }}
                style={{ padding: "1rem", borderRadius: "1rem" }}
              >
                Add More
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isFourth && (
          <motion.div
            animate={{ height: "40rem", bottom: "0rem" }}
            initial={{ height: "0rem", bottom: "-10rem" }}
            exit={{ height: "0rem", bottom: "-10rem" }}
            transition={{
              height: { duration: 1, ease: [0.85, 0, 0.15, 1] },
              top: { duration: 1, delay: 0.1, ease: [0.85, 0, 0.15, 1] },
            }}
            style={{
              position: "absolute",
              width: "50%",
              height: "35rem",
              borderRadius: "1rem",
              flexDirection: "column",
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
              alignItems: "center",
              backgroundColor: "white",
              zIndex: "2",
              right: 0,
              bottom: 0,
            }}
          >
            <div
              onClick={() => {
                setFourth(!isFourth);
              }}
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                color: "black",
                position: "absolute",
                left: "1rem",
                top: "1rem",
              }}
            >
              <IoMdCloseCircle />
            </div>
            <WebCam
              style={{ borderRadius: "1rem" }}
              ref={ref_2}
              screenshotFormat="image/jpeg"
            />
            <button
              style={{
                width: "85%",
                fontSize: "0.75rem",
                padding: "1rem",
                backgroundColor: "blue",
                borderRadius: "1rem",
                color: "white",
                marginBlock: "1rem",
              }}
              onClick={() => {
                console.log(ref_2.current.getScreenshot());
              }}
            >
              Snap
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div
          onClick={() => {
            setFirst(!isFirst);
          }}
          className="card"
          style={{ position: "relative" }}
        >
          <div className="card-inner">
            <h3>LIGHTS</h3>
            <BsLightbulbFill className="card_icon" />
          </div>
          <h1>{SliderWindowArray.length}</h1>
        </div>
        <div
          onClick={() => {
            setSecont(!isSecont);
          }}
          className="card"
        >
          <div className="card-inner">
            <h3>MUSIC</h3>
            <BsMusicNote className="card_icon" />
          </div>
          <h1>{MusicArray.length}</h1>
        </div>
        <div
          onClick={() => {
            setThird(!isThird);
          }}
          className="card"
        >
          <div className="card-inner">
            <h3>TEMPERATURE</h3>
            <BsSnow className="card_icon" />
          </div>
          <h1>{TempArray.length}</h1>
        </div>
        <div
          onClick={() => {
            setFourth(!isFourth);
          }}
          className="card"
        >
          <div className="card-inner">
            <h3>SECURITY</h3>
            <BsCameraVideoFill className="card_icon" />
          </div>
          <h1>1</h1>
        </div>
      </div>
      <div style={{width: "100%", height: "50vh"}}>
      <h1 style={{fontSize: "1rem", marginBlock: "2rem", textTransform: "uppercase"}}>Real Time Power Consumption</h1>
        <ResponsiveContainer width="70%" height="90%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="pv"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="uv"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}


const Slider = () => {
  const [state, setState] = React.useState(false);
  return <div
        onClick={() => {
          setState(!state);
        }}
        style={{
          width: "2rem",
          height: "10px",
          backgroundColor: "gray",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "1.5rem",
            height: "1.5rem",
            borderRadius: "50%",
            backgroundColor: "red",
            position: "absolute",
            left: state ? "100%" : "0%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
}

const SliderWindow = ({ Text, array, setArray, setterArray }) => {



  const handleRemove = () => {
    let index = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == Text) index = i;
    }

    let final_arr = array.filter((x) => {
      if (x != array[index]) return true;
      return false;
    });
    setArray(final_arr);
  };
  return (
    <div
      style={{
        width: "90%",
        height: "5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "normal",
        fontSize: "0.75rem",
        textTransform: "uppercase",
        paddingInline: "1rem",
        background: "#7AA2E3",
        borderRadius: "1rem",
      }}
    >
      <motion.h1
        style={{
          color: "black",
          display: "flex",
          gap: "0.5rem",
        }}
      >
        <IoTrashBin onClick={handleRemove} />
        {Text}
      </motion.h1>
      <Slider />
    </div>
  );
};



const Music = ({ Text, array, setArray }) => {
  const [state, setState] = React.useState(false);
  const ref = React.useRef(null);
  const handleRemove = () => {
    let index = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == Text) index = i;
    }

    let final_arr = array.filter((x) => {
      if (x != array[index]) return true;
      return false;
    });
    setArray(final_arr);
  };
  return (
    <div
      style={{
        width: "90%",
        height: "6rem",
        fontWeight: "normal",
        fontSize: "0.75rem",
        textTransform: "uppercase",
        paddingInline: "1rem",
        background: "#7AA2E3",
        borderRadius: "1rem",
      }}
    >
      <motion.h1
        style={{
          color: "black",
          display: "flex",
          gap: "0.5rem",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <IoTrashBin onClick={handleRemove} />
        {Text}
        <div style={{flex: 1, marginLeft: "2rem"}}>
          <Slider />
        </div>
      </motion.h1>

      <div
        ref={ref}
        style={{
          width: "100%",
          height: "10px",
          backgroundColor: "white",
          borderRadius: "2rem",
          position: "relative",
          marginBlock: "1rem",
        }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 340 }}
          style={{
            width: "1.5rem",
            height: "1.5rem",
            borderRadius: "50%",
            backgroundColor: "white",
            border: "0.25px solid black",
            position: "absolute",
            top: "-50%",
          }}
        />
      </div>
    </div>
  );
};

const Temperature = ({ Text, array, setArray }) => {
  if(!localStorage.getItem(Text)) localStorage.setItem(Text, 19);
  const [state, setState] = React.useState(parseInt(localStorage.getItem(Text)));
  const handleRemove = () => {
    let index = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] == Text) index = i;
    }

    let final_arr = array.filter((x) => {
      if (x != array[index]) return true;
      return false;
    });
    setArray(final_arr);
  };
  return (
    <div
      style={{
        width: "90%",
        height: "5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "normal",
        fontSize: "0.75rem",
        textTransform: "uppercase",
        paddingInline: "1rem",
        background: "#7AA2E3",
        borderRadius: "1rem",
      }}
    >
      <motion.h1
        style={{
          color: "black",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <IoTrashBin onClick={handleRemove} />
        {Text}
      </motion.h1>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <button
          style={{
            background: "white",
            color: "blue",
            border: "none",
            outline: "none",
            borderRadius: "50%",
            fontWeight: "bold",
            fontSize: "1.5rem",
            height: "2rem",
            width: "2rem",
          }}
          onClick={() => {
            if (state < 33){
              setState(state + 1);
              localStorage.setItem(Text, state);
            } 
          }}
        >
          +
        </button>
        <h1
          style={{
            fontSize: "1.5rem",
          }}
        >
          {state}
        </h1>
        <button
          style={{
            background: "white",
            color: "blue",
            border: "none",
            outline: "none",
            borderRadius: "50%",
            fontWeight: "bold",
            height: "2rem",
            width: "2rem",
            fontSize: "1.5rem",
          }}
          onClick={() => {
            if (state > 16) {
              setState(state - 1);
              localStorage.setItem(Text, state);
            } 
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};
export default Home;

const useGlobalState = create((set) => ({
  isFirst: false,
  isSecont: false,
  isThird: false,
  isFourth: false,
  setFirst: (something) =>
    set({
      isFirst: something,
      isSecont: false,
      isThird: false,
    }),
  setSecont: (something) =>
    set({
      isFirst: false,
      isSecont: something,
      isThird: false,
    }),
  setThird: (something) =>
    set({
      isFirst: false,
      isSecont: false,
      isThird: something,
    }),
  setFourth: (something) =>
    set({
      isFirst: false,
      isSecont: false,
      isThird: false,
      isFourth: something,
    }),
}));
