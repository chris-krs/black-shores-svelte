<script lang="ts">
  import avatar from "$lib/assets/avatar.webp";
  import avatarBg from "$lib/assets/avatar-bg.webp";
</script>

<div class="relative flex items-center gap-5">
  <a
    class="group relative flx-col justify-end items-center w-36 h-48 rounded-b-full overflow-hidden shadow-xl/20"
    href="/"
  >
    <img
      class="absolute top-0 left-0 -z-1 transition-all duration-300 group-hover:scale-110"
      src={avatarBg}
      alt="iuno"
      fetchpriority="high"
    />
    <img
      class="rounded-full mx-auto w-21 mb-3"
      src={avatar}
      alt="my wife iuno~"
    />
  </a>
  <div class="flx-col justify-end h-full pb-4">
    <div class="flx-col gap-1">
      <span class="font-bold text-2xl">Kriz</span>
      <span
        class="text-gray-400 text-xs font-bold transition-color duration-700"
      >
        「忤逆命运者」
      </span>
    </div>
  </div>
</div>

