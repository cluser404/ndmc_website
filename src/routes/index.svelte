<script>
    import Banner from "../components/Banner.svelte";
</script>

<svelte:head>
    <!--Parmanent Marker Font-->
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">

    <title>NDMC | Homepage</title>
</svelte:head>

<Banner
logo_url={"/content/ndmc_logo.png"} 
company_name={"Notore Dame Math Club"}
cta_text={"JOIN NDMC"}
cta_link={"https://www.facebook.com/groups/368006847807548"}
social_links={[
    {iconName: "paper-plane", link: "https://t.me/ndmc_official"},
    {iconName: "logo-facebook", link: "https://www.facebook.com/official.ndmc"},
    {iconName: "logo-discord", link: "https://discord.gg/8CEV3T9TCp"},
    ]}
/>