function Botton(props) {
  return (
    <button {...props} className="bg-slate-400 p-2 rounded-md ml-2 text-white">
      {props.children}
    </button>
  );
}

export default Botton;
