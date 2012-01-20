<div rel='{{ mls_number }}'>
  <table class="resultRowTable">
    <tr id="row-{{ residential_id }}">

      <td class="propertyPreviewPic">
        {{ preview_image }}
      </td>

      <td class="propertyAddress">
        <strong>{{ address }}</strong><br/>
        {{ city }}, {{ state }} {{ zip }}<br />
        <div class="propertySubdivision">{{ subdivision }}</div>
      </td>

      <td class='price'>
        <span class='mlsNumber'>MLS# {{ mls_number }}<br /></span>
        <span class='price'>{{ price }}</span>
      </td>

      <td class="propertyBedsSf">
        {{ bedroom_count }} Bed / {{ bath_count }} Bath <br />
        <div class="propertySquareFeet">{{ square_feet }} s.f</div>
      </td>

      <td class='actions'>
        {{ link_to_add_or_remove_from_favorites }}<br />
        {{ link_to_request_info }}
      </td>

      <td class="propertyActions">
        {{ link_to_view_details }}
      </td>

    </tr>
  </table>
</div>