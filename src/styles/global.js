import { createGlobalStyle } from 'styled-components'
import backgroundImg from '../assets/pokemon-background2.jpg'
import backgroundImg2 from '../assets/pokemon-background.jpg'

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
    .header{
        /* background: #3f3f3f; */
	    /* background: linear-gradient(to right, rgb(197, 230, 236), rgb(239, 187, 230)); */
        background: url(${backgroundImg2}) no-repeat top;

        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    body{
        background: url(${backgroundImg}) no-repeat top;
        background-size: cover;


	    /* background: linear-gradient(to right, rgb(197, 230, 236), rgb(239, 187, 230)); */
       
        color: white;
	    margin: 0;
	    font-family: rubik;
    }
    li{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        padding: 10px;
        width: 245px;

        justify-self: center;
        border-radius: 10%;
    }

    .pkmcard {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        grid-gap: 20px;
        padding-inline-start: 0;
        border-radius: 50px;
        color: #3d3d3d;

    }

.steel {
	background-color: #f4f4f4;
}

.fire {
	background-color: #FDDFDF;
}

.grass {
	background-color: #DEFDE0;
}

.electric {
	background-color: #FCF7DE;
}

.water, .ice {
	background-color: #DEF3FD;
}

.ground {
	background-color: #f4e7da;
}

.rock {
	background-color: #d5d5d4;
}

.fairy {
	background-color: #fceaff;
}

.poison {
	background-color: #bc88ce;
}

.bug {
	background-color: #99cc99;
}

.dragon {
	background-color: #97b3e6;
}

.psychic {
	background-color: #eaeda1;
}

.flying {
	background-color: #F5F5F5;
}

.fighting {
	background-color: #E6E0D4;
}

.normal {
	background-color: #F5F5F5;
}

`

export default GlobalStyle