<script>
    export let title = "title";
    export let subtitle = "subtitle";
</script>

<div class="has-text-centered-mobile">
    <div class="p-1">
        <h1 class="is-size-4-mobile is-size-2 has-text-weight-bold">
            <ion-icon name="leaf-sharp"></ion-icon>&nbsp;{title}
        </h1>
        <div class="px-3">
            <h2 class="is-size-5-mobile is-size-4 has-text-weight-light has-text-grey">{subtitle}</h2>
        </div>
    </div>
    <div class="mt-3 p-1">
        <slot name="content"></slot>
    </div>
</div>