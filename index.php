<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
    <link rel="stylesheet" type="text/css" href="SCSS/Style.css">
    <!-- <link rel="stylesheet" type="text/css" href="JS/slick/slick.css"> -->
    <!-- <link rel="stylesheet" type="text/css" href="JS/slick/slick-theme.css"> -->

    <title>Netmatters Remake</title>
</head>

<body>

<?php include 'header.php'; ?>

<main>
<div class="contactUs_header">
    <h1>Our Offices</h1>
</div>

<div class="wrapper">
    <div class="contact_cards">
        <div class="contactUs_offices" id="london_card">
            <img alt="London Office" src="SCSS/Images/london_office.jpg">
            <h2><a href="#">London Office</a></h2>
            <p>Unit G6,<br>
                Pixel Business Centre,<br>
                110 Brooker Road, Waltham Abbey,<br>
                London,<br>
                EN9 1JH
            </p>
            <a class="contact_telephone" href="#">02045 397354</a>
            <a class="contact_viewMore" href="'#">VIEW MORE</a>
        </div>

        <div class="contactUs_offices" id="cambridge_card">
            <img alt="Cambridge Office" src="SCSS/Images/cambridge_office.jpg">
            <h2><a href='#'>Cambridge Office</a></h2>
            <p>Unit 1.31,<br>
                St John's Innovation Centre,<br>
                Cowley Road, Milton,<br>
                Cambridge,<br>
                CB4 0WS
            </p>
            <a class="contact_telephone" href="#">01223 37 57 72</a>
            <a class="contact_viewMore" href="'#">VIEW MORE</a>
        </div>

        <div  class="contactUs_offices" id="wymondham_card">
            <img alt="Wymondham Office" src="SCSS/Images/wymondham_office.jpg">
            <h2><a href='#'>Wymondham Office</a></h2>
            <p>Unit 15,<br>
                Penfold Drive,<br>
                Gateway 11 Business Park,<br>
                Wymondham, Norfolk,<br>
                NR18 0WZ
            </p>
            <a class="contact_telephone" href="#">01603 70 40 20</a>
            <a class="contact_viewMore" href="'#">VIEW MORE</a>
        </div>

        <div class="contactUs_offices" id="yarmouth_card">
            <img alt="Great Yarmouth Office" src="SCSS/Images/yarmouth_office.jpg">
            <h2><a href='#'>Great Yarmouth Office</a></h2>
            <p>Suite F23,<br>
                Beacon Innovation Centre,<br>
                Beacon Park, Gorleston,<br>
                Great Yarmouth, Norfolk,<br>
                NR31 7RA
            </p>
            <a class="contact_telephone" href="#">01493 60 32 04</a>
            <a class="contact_viewMore" href="'#">VIEW MORE</a>
        </div>

    </div>
</div>


<div class="wrapper">
    <div class="contactUs_form">
        <div class="contactUs_inputs">
            
            <div id="contactUs_names">
                <div id="contactUs_Name" class="info">
                    <label for="full-name">Your name *</label><br>
                    <input type="text" id="full-name" name="full-name" required>
                </div>

                <div id="contactUs_companyName" class="info">
                    <label for="company-name">Company name</label><br>
                    <input type="text" id="company-name" name="company-name" required>
                </div>

            </div>

            <div id="contactUs_otherInfo">
                <div id="contactUs_email" class="info">
                    <label for="email">Your Email *</label><br>
                    <input type="email" id="email" name="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" required>
                </div>
                <div id="contactUs_number" class="info">
                    <label for="phone">Your Telephone number *</label><br>
                    <input type="tel" id="phone" name="phone" required maxlength="11" pattern="[0-9, ]+[0-9, ]">
                </div>
            </div>
                <div id="contactUs_message" class="info">
                    <label for="textarea_msg">Message *</label><br>
                    <textarea id="textarea_msg" placeholder="Hi, I am interested in discussing a Our Offices solution, could you please give me a call or send an email?"></textarea>
                </div>
                <div class="checkbox-container">
                    <input type="checkbox" id="cb1">
                    <span id="checkbox_text" class="something">Please tick this box if you wish to receive marketing information from us. Please see our <a href="#">Privacy Policy</a> for more information on how we keep your data safe.</span>
                </div>

            <button type="submit">SEND ENQUIRY</button>
            <small>* Fields Required</small>
        </div>
    </div>
</div>
</main>

<?php include 'footer.php'; ?>


<?php include 'sideNav.php'; ?>

</body>

</html>


