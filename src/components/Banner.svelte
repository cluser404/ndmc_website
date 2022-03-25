<script>
    import asset_celebration from "$lib/assets/celebration.gif";
    export let logo_url = null;
    export let banner_url = null;
    export let company_name = "Company";
    export let cta_text = "JOIN NOW";
    export let cta_link = "/"
    export let social_links = [];
    let glass_panel_width;
</script>

<style>
    .banner {
        position: relative;
        width: 100vw;
        height: 95vh;
        background-color: #000000;
        /*background: url("/content/ndmc_banner_optimized.png");*/
        background-size: cover;
    }

    .glass-panel {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 88%;
        width: 80%;
        transform: translate(-50%, -50%);
        background: rgba(255, 255, 255, 0.25);
        background: rgba(132, 91, 156, 0.25);
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }

    .center-box {
        position: absolute;
        width: 100%;
        top: 50%;
        transform: translatey(-50%);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .center-box>div {
        margin: 16px 8px;
    }

    .logo {
        height: 180px;
        width: 180px;
        margin: 0 auto;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    .heading-text {
        background: #8CB6FF;
        background: -webkit-linear-gradient(to right, #8CB6FF 35%, #B06BFF 72%, #8CB6FF 94%);
        background: -moz-linear-gradient(to right, #8CB6FF 35%, #B06BFF 72%, #8CB6FF 94%);
        background: linear-gradient(to right, #8CB6FF 35%, #B06BFF 72%, #8CB6FF 94%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-family: 'Permanent Marker', cursive;
        text-shadow: 4px 4px #ffffff, 7px 7px #000000;
        word-spacing: 15px;
        line-height: 1.2;
    }

    .celebration {
        height: 50px;
        width: 50px;
        margin: 0 8px 8px 0;
    }

    .celebration-gif {
        height: 100%;
        width: auto;
    }

    .join-button-text {
        word-spacing: 4px;
    }

    .outlink-box {
        display: flex;
        flex-direction: column;
        position: absolute;
        right: 0;
        bottom: 0;
        margin: 8px;
        margin-bottom: 32px;
    }
    .outlink-box > div {
        margin: 4px;
    }

</style>

<div class="banner" style="background: black url('{banner_url}') no-repeat center center; background-size: cover">
    <div class="glass-panel" bind:clientWidth={glass_panel_width}>
        <div class="center-box">
            <div>
                <h1 class="heading-text has-text-weight-bold has-text-centered is-size-1 has-text-grey-lighter">{company_name}</h1>
            </div>
            <div class="logo">
                <img draggable="false" src="{logo_url}" alt="ndmc logo">
            </div>
            <div class="pt-3">
                <a class="button join-button-text is-medium is-white has-text-weight-bold is-outlined" href={cta_link}>
                    <span class="celebration">
                        <img class="celebration-gif" draggable="false" src="{asset_celebration}" alt="join ndmc">
                    </span>
                    <span>{cta_text}</span>
                </a>
            </div>
        </div>
        <div class="outlink-box">
            {#if glass_panel_width>500}
            {#each social_links as social}
            <div>
                <a rel="external" href="{social.link}" class="button is-outlined is-white">
                    <span class="icon">
                        <ion-icon name="{social.iconName}"></ion-icon>
                    </span>
                </a>
            </div>
            {/each}
            {/if}
        </div>
    </div>
</div>

<div class="m-2 is-flex is-justify-content-center ">
    {#if glass_panel_width<=500}
    {#each social_links as social}
    <div>
        <a rel="external" href="{social.link}" class="button is-medium">
            <span class="icon">
                <ion-icon name="{social.iconName}"></ion-icon>
            </span>
        </a>
    </div>
    {/each}
    {/if}
</div>
