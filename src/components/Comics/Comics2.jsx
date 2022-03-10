import * as React from 'react';
import Masthead from '../MastHead/Masthead';
import s from './Comics2.module.css';
import ReactDOM from 'react-dom';
import { Pagination } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import Pages from '../Pagination/Pagination';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import SvgIcon from '@mui/material/SvgIcon';


const Comics2 = (props) => {

  let sortValue = React.createRef();

  let onSort = () => {
    let sort = sortValue.current.value;
    props.sortChange(sort);
    // props.dispatch(onPostChangeActionCreator(text))
    debugger;
  }

  let searchValue = React.createRef();
  let onSearch = () => {
    let search = searchValue.current.value;
    props.search(search);
    
    // props.dispatch(onPostChangeActionCreator(text))
  }
 

  const useStyles = makeStyles((theme) =>({
    root: {
        

    },
  }))
  
  const classes = useStyles();
debugger;

  return (
    <div>

      <Masthead head={'COMICS'} />

      <div className={s.comics_page}>


        <select ref={sortValue} onChange={onSort} className={s.user_profile_color_1}>
          <option value="title">A-z</option>
          <option value="-title">Z-a</option>
        </select>

        <input ref={searchValue} type="search" name="q" placeholder="Поиск по сайту"></input>
        <input type="submit" value="Найти" onClick={onSearch}></input>

        <div className={s.card_comics_wrapper}>
          {props.comics.map(item => (

            <div className={s.comics} key={item.id}>
              <div className={s.card_comics}>
                <div className={s.favorite_bg}></div>
              {props.favorites.find(i => i.id == item.id)
                ? <div  onClick={() => { props.deleteFavorite(item.id) }} className={s.btn_favorite_star}> 
                   <SvgIcon component={StarRoundedIcon} className={classes.root} fontSize="large" />
                 </div>
                : <div onClick={() => { props.setAddFavorite(item.id) }} className={s.btn_favorite_star}>
                    <SvgIcon component={StarBorderRoundedIcon} className={classes.root} fontSize="large" />
                  </div>
              }
                
              <div className={s.card_img} style={{ backgroundImage: 'url(' + item.thumbnail.path + '.jpg' + ')' }}></div>
              {/* <div className={s.card_info}>

                
                {props.favorites.find(i => i.id == item.id)
                  ? <button onClick={() => { props.deleteFavorite(item.id) }} className={s.btn_favorite_delete}>delete</button>
                  : <button onClick={() => { props.setAddFavorite(item.id) }} className={s.btn_favorite}>add favorite</button>}
                
                
              </div> */}
              <div className={s.title}>
              <span className={s.card_title}>{item.title}</span>
              </div>
              </div>
            </div>
            
          ))}
        </div>
          <Pages {...props} />
      </div>
    </div>
  )
}


export default Comics2;