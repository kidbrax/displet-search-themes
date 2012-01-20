<div rel='{{ mls_number }}' class="resultRow {{ mapped_class }}">

  <a href='{{ residential_url }}'>

    <div class='resultRowInner' id="row-{{ residential_id }}">

      <div class="propertyPreviewPic">
        {{ print_preview_image }}
      </div>

      <div class="propertyAddress">
        <strong>{{ address }}</strong><br/>
        {{ city }}, {{ state }} {{ zip }}<br />
        <div class="propertySubdivision">{{ subdivision }}</div>
      </div>

      <div class="propertyPriceBedsSf">
        MLS# {{ mls_number }}<br />
        {{ price }}<br />
        {{ num_bedrooms }} Bed/{{ num_baths }} Bath <br />
        <div class="propertySquareFeet">{{ square_feet }}</div>
      </div>

      <div class="propertyActions">
        <p class='viewDetailsLink'>{{ view_details_link }}</p>
      </div>
    </div>

  </a>

</div>