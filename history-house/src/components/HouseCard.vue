<template>
  <div>
    <h3>House card</h3>
    <p>Founder: {{house.founder}}</p>
    <p>Head of house: {{house.headOfHouse}}</p>
    <p>House ghost: {{house.houseGhost}}</p>
    <p>Mascot: {{house.mascot}}</p>
    <p>School: {{house.school}}</p>
    <br />Members:
    <div v-for="(member, index) of house.members" :key="`member-${index}`">{{member.name}}</div>
    <br />Colors:
    <div v-for="(color, index) of house.colors" :key="`color-${index}`">{{color}}</div>

    <br />Values:
    <div v-for="(value, index) of house.values" :key="`value-${index}`">{{value}}</div>
  </div>
</template>

<script>
export default {
    name: "HouseCard",
    props: {
        house: {
            required: true,
            type: Array
        }
    }
};
</script>

<style>
</style>