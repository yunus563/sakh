import React from "react";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { setProducts } from "../redux/actions/productsActions";
import { Link } from 'react-router-dom';

const  Kategories = ()=>{
  
  // const [data, setData] = useState(null)
  // const products = useSelector((state) => state.allProducts.products);
  // const dispatch = useDispatch();
  // const [errors, seterrors] = useState(null)
  // const [loaing, setLoading] = useState(false)
  
  // useEffect(() => {
  //   axios.get("https://fakestoreapi.com/products")
  //   .then(
  //     (results) =>{
  //             dispatch(setProducts(results));
  //             setData(results.data)
  //             setLoading(true)
  //           },
  //           (error) =>{
  //             setLoading(true)
  //             seterrors(error)
  //           }
  //         )
  // },[]);
    return(
      <>
      <div class="list-group col-3">
        <button type="button" class="list-group-item list-group-item-action"><a href="/auksion">Аукционы</a></button>
        <button type="button" class="list-group-item list-group-item-action"><Link to="/korzinka">Korzinka</Link></button>
      </div>
    </>
  )
}
export default Kategories