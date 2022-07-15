export const form = `
    <nav>
    <div id="nav-inner">
        <h1>SaVor.</h1>
    </div>
    </nav>

    <div id='form'>
    <h1 id='form-title'>
        BIG MART Sales Prediction
    </h1>

    <h1 id='section-heading'>
        Item Details
    </h1>

    <div class="input">
        <input type='text' placeholder='Enter Item Identifier' name='Item_Identifier' />
    </div>

    <div class="input">
        <input type='text' placeholder='Enter Item Weight' name='Item_Weight' />
    </div>

    <div class="input">
        <div class="select">
            <button>
                Choose Item Fat Content Level

                <img src='./assets/drop.png' />
            </button> 

            <ul name='Item_Fat_Content' class="select-list">
                <li value='0'>
                    Low Fat
                    <input type='radio' />
                </li>

                <li value='1'>
                    Regular
                    <input type='radio' />
                </li>
            </ul>
        </div>
    </div>

    <div class="input">
        <input type='text' placeholder='Enter Item Visibility' name='Item_Visibility' />
    </div>

    <div class="input">
        <div class="select">
            <button>
                Choose Item Type

                <img src='./assets/drop.png' />
            </button> 

            <ul class="select-list" name='Item_Type'>
                <li value='0'>
                    Baking Goods
                    <input type='radio' />
                </li>
                <li value='1'>
                    Breads
                    <input type='radio' />
                </li>
                <li value='2'>
                    Breakfast
                    <input type='radio' />
                </li>
                <li value='3'>
                    Canned
                    <input type='radio' />
                </li>
                <li value='4'>
                    Dairy
                    <input type='radio' />
                </li>
                <li value='5'>
                    Frozen Food
                    <input type='radio' />
                </li>
                <li value='6'>
                    Fruits and Vegetables
                    <input type='radio' />
                </li>
                <li value='7'>
                    Hard Drinks
                    <input type='radio' />
                </li>
                <li value='8'>
                    Health and Hygiene
                    <input type='radio' />
                </li>
                <li value='9'>
                    Househol
                    <input type='radio' />
                </li>
                <li value='10'>
                    Meat
                    <input type='radio' />
                </li>
                <li value='11'>
                    Others
                    <input type='radio' />
                </li>
                <li value='12'>
                    Seafood
                    <input type='radio' />
                </li>
                <li value='13'>
                    Snack Foods
                    <input type='radio' />
                </li>
                <li value='14'>
                    Soft Drinks
                    <input type='radio' />
                </li>
                <li value='15'>
                    Starchy Food
                    <input type='radio' />
                </li>
            </ul>
        </div>
    </div>

    <div class="input">
        <input type='text' placeholder='Enter Item MRP' name='Item_MRP' />
    </div>

    <h1 id='section-heading'>
        Outlet Details
    </h1>

    <div class="input">
        <div class="select">
            <button>
                Choose Outlet Identifier

                <img src='./assets/drop.png' />
            </button> 

            <ul class="select-list" name='Outlet_Identifier'>
                <li value='0'>
                    OUT010
                    <input type='radio' />
                </li> 
                <li value='1'>
                    OUT013
                    <input type='radio' />
                </li> 
                <li value='2'>
                    OUT017
                    <input type='radio' />
                </li> 
                <li value='3'>
                    OUT018
                    <input type='radio' />
                </li> 
                <li value='4'>
                    OUT019
                    <input type='radio' />
                </li> 
                <li value='5'>
                    OUT027
                    <input type='radio' />
                </li> 
                <li value='6'>
                    OUT035
                    <input type='radio' />
                </li> 
                <li value='7'>
                    OUT045
                    <input type='radio' />
                </li> 
                <li value='8'>
                    OUT046
                    <input type='radio' />
                </li> 
                <li value='9'>
                    OUT049
                    <input type='radio' />
                </li>
            </ul>
        </div>
    </div>

    <div class="input">
        <input type='text' placeholder='Enter Outlet Establishment Year' name='Outlet_Establishment_Year' />
    </div>

    <div class="input">
        <div class="select">
            <button>
                Choose Outlet Size

                <img src='./assets/drop.png' />
            </button> 

            <ul class="select-list" name='Outlet_Size'>
                <li value='0'>
                    High
                    <input type='radio' />
                </li>

                <li value='1'>
                    Medium
                    <input type='radio' />
                </li>

                <li value='2'>
                    Small
                    <input type='radio' />
                </li>
            </ul>
        </div>
    </div>

    <div class="input">
        <div class="select">
            <button>
                Choose Outlet Location Type

                <img src='./assets/drop.png' />
            </button> 

            <ul class="select-list" name='Outlet_Location_Type'>
                <li value='0'>
                    Tier 1
                    <input type='radio' />
                </li>

                <li value='1'>
                    Tier 2
                    <input type='radio' />
                </li>

                <li value='2'>
                    Tier 3
                    <input type='radio' />
                </li>
            </ul>
        </div>
    </div>

    <div class="input">
        <div class="select">
            <button>
                Choose Outlet Type

                <img src='./assets/drop.png' />
            </button> 

            <ul class="select-list" name='Outlet_Type'>
                <li value='0'>
                    Grocery Store
                    <input type='radio' />
                </li>

                <li value='1'>
                    Supermarket Type 1
                    <input type='radio' />
                </li>

                <li value='2'>
                    Supermarket Type 2
                    <input type='radio' />
                </li>

                <li value='3'>
                    Supermarket Type 3
                    <input type='radio' />
                </li>
            </ul>
        </div>
    </div>

    <div id='buttons'>
        <button id='reset'>Reset</button>
        <button id='submit'>Submit</button>
    </div>
    </div>
`