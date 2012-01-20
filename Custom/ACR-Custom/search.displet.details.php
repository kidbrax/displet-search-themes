{{ bottom_navigation }}
<div class='col1'>

  <div id='actions1' class="dropshadow oswald">
    <div id='requestShowing'>{{ request_showing }}</div>
    <div id='addToFavorites'>{{ add_to_favorites }}</div>
	<div class="clear"></div>
  </div>

  <div id='actions2'>
    <div id='callUs'>Any questions?<br /><span>Call us at {{ website_phone }}</span></div>
    <div id='sendToFriend'>{{ email_to_friend }}</div>
	<div class="clear"></div>
  </div>

  <div id='detailsHeader'>
    <h2 class='address'>{{ address }}</h2>
    <div id='detailsProperty'>
      <h3 class='price'>{{ list_price }}</h3>
      <div class='subColumnOne'>
        <p><span class="fieldName">{{ address }}</span></p>
        <p><span class="fiendName">{{ city_state_zip }}</span></p>
        <p>MLS# {{ mls_number }}</p>
        <p>{{ subdivision }}</p>
      </div>

      <div class='subColumnTwo'>
        <p>{{ num_bedrooms }} Bed / {{ full_baths }} Bath</p>
        <p># Stories {{ stories }}</p>
        <p>{{ square_feet }} Sq. Ft.</p>
        <p><span class='fieldName'>Property Type:</span> {{ property_type }}</p>
        <p><span class='fieldName'>Year Built:</span> {{ year_built }}</p>
      </div>

      <p class='clear' id='propertyAge'>Listed on {{ domain }} for <span class='red'>{{ age }}</span> days</p>
    </div>
  </div>
  
  <div class='tanBack' id='detailsRemarks'>
    <p class="tanbacktit">Agent Description</p>
    <p>{{ remarks }}</p>
    <p class="remarks">*These remarks entered by listing agent.</p>
  </div>

<div id='detailsProperty2' class='tanBack'>

    <p class="tanbacktit">Property Information:</p>

    <div class='subColumnOne'>

      <p><span class='fieldName'>{{ num_bedrooms }} Bedrooms, {{ full_baths }} Full / {{ half_baths }} Half Bathrooms | Stories:</span> </p>

      <p><span class='fieldName'>Year Built:</span> </p>

      <p><span class='fieldName'>Living Space:</span> </p>

      <p><span class='fieldName'>Pool:</span> </p>

      <p><span class='fieldName'>Garage Spaces:</span> </p>

      <p><span class='fieldName'>Living Room(s):</span> </p>

      <p><span class='fieldName'>Dining Area(s):</span> </p>

      <p><span class='fieldName'>Guest Accommodations:</span> </p>

      <p><span class='fieldName'>Construction:</span> </p>

      <p><span class='fieldName'>Roof Type:</span> </p>

      <p><span class='fieldName'>Floors:</span> </p>

    </div>

    <div class='subColumnTwo'>

      <p><span class='fieldName'>&nbsp;{{ stories }}</p>

      <p><span class='fieldName'>&nbsp;{{ year_built }}</p>

      <p><span class='fieldName'>&nbsp;{{ square_feet }} Sq. Ft.</p>

      <p><span class='fieldName'>&nbsp;{{ with_pool }}</p>

      <p><span class='fieldName'>&nbsp;{{ garage_spaces }}</p>

      <p><span class='fieldName'>&nbsp;{{ living }}</p>

      <p><span class='fieldName'>&nbsp;{{ dining }}</p>

      <p><span class='fieldName'>&nbsp;{{ guest_accommodations }}</p>

      <p><span class='fieldName'>&nbsp;{{ construction }}</p>

      <p><span class='fieldName'>&nbsp;{{ roof }}</p>

      <p><span class='fieldName'>&nbsp;{{ floor }}</p>

    </div>

    <div style="clear:both;"></div>    

</div>

</div>

<div class='col2'>
  <ul id='detailTabs'>
    <li><a class='active' href="javascript:void(0)" rel='detailPhotos'>Photos</a></li>
    <li><a href="javascript:void(0)" rel='detailMapOuter'>Map</a></li>
    <li><a href="javascript:void(0)" rel='userCommentsContainer'>Comments {{ comment_count }}</a></li>
  </ul>

  {{ photos }}

  
    {{ map }}
  
  <div class='largeDetailDisplay' id='userCommentsContainer' style='display: none'>
  	{{ comments }}	
  </div>
</div>

<div class='col2second'>
  <div class='tanBack' id='financialInfo'>
    <p class="tanbacktit">Financial Info:</p>
      <p><span class='fieldName'>Price:</span><span class='fieldRight'>&nbsp;{{ list_price }}</span></p>
      <p><span class='fieldName'>Annual Tax:</span><span class='fieldRight'>&nbsp;{{ estimated_taxes }}</p>
      <p><span class='fieldName'>HOA:</span><span class='fieldRight'>&nbsp;{{ hoa }}</p>
      <p><span class='fieldName'>HOA Freq:</span><span class='fieldRight'>&nbsp;{{ hoa_frequency }}</p>
    <div style="clear:both;"></div>    
  </div>
  <div class='tanBack' id='detailsSchool'>
    <p class="tanbacktit">School Info:</p>
      <p><span class='fieldName'>School District:</span><span class='fieldRight'>&nbsp;{{ school_district }}</span></p>
      <p><span class='fieldName'>Elementary School:</span><span class='fieldRight'>&nbsp;{{ elementary_school }}</p>
      <p><span class='fieldName'>Middle School:</span><span class='fieldRight'>&nbsp;{{ middle_school }}</p>
      <p><span class='fieldName'>High School:</span><span class='fieldRight'>&nbsp;{{ senior_high }}</p>
    <div style="clear:both;"></div>    
  </div>
  <div class="clear"></div>
  <div class='tanBack' id='lotArea'>
    <p class="tanbacktit">Lot & Area Information:</p>
      <p><span class='fieldName'>Waterfront:</span><span class='fieldRight'>&nbsp;{{ waterfront }}</span></p>
      <p><span class='fieldName'>Waterfront Type:</span><span class='fieldRight'>&nbsp;{{ waterfront_description }}</p>
      <p><span class='fieldName'>View:</span><span class='fieldRight'>&nbsp;{{ view }}</p>
      <p><span class='fieldName'>Lot Size:</span><span class='fieldRight'>&nbsp;{{ acres }} Acres</p>
  </div>
  <div class='tanBack' id='amenities'>
    <p class="tanbacktit">Amenities:</p>
    <p>{{ area_amenities }}</p>
  </div>
</div>
<div class="clear"></div>

<div class='tanBack' id='propDesc'>
    <p class="tanbacktit">Property Description:</p>
    <p>{{ property_description }}</p>
</div>


<div class='grayBack' id='detailFooter'>
  Courtesy of {{ listing_office_name }}<br />
  Last updated {{ last_update }}
</div>