<template>
  <div id="equalizer" ref="equalform" class="my-2 py-16 px-16"></div>
  <div ref="waveform"></div>
  <div class="mt-4 flex space-x-4">
    <button
      @click="playIt()"
      class="bg-amber-500 hover:bg-amber-600 transition text-white px-3 py-1.5 rounded-md"
    >
      <svg
        v-if="!state.isPlaying"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 5.25v13.5m-7.5-13.5v13.5"
        />
      </svg>
    </button>
    <div class="flex items-center space-x-2">
      <input
        type="range"
        id="volume"
        name="volume"
        min="0"
        max="100"
        v-model="state.volume"
        @change="volumeIt"
      />
      <label for="volume"
        ><svg
          @click="muteVolume()"
          v-if="state.volume > 0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
          /></svg
        ><svg
          @click="resetVolume()"
          v-else
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
          />
        </svg>
      </label>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, reactive } from "vue";
import WaveSurfer from "wavesurfer.js";
import WaveCursor from "wavesurfer.js/dist/plugin/wavesurfer.cursor";

const props = defineProps({
  src: String,
  useEqualizer: Boolean,
  useControls: Boolean,
});

const waveform = ref(null);
const equalform = ref(null);
let wavesurfer;

const state = reactive({
  isPlaying: false,
  volume: 100,
});

const playIt = () => {
  wavesurfer.playPause();
  state.isPlaying = !state.isPlaying;
};

const resetVolume = () => {
  state.volume = 50;
  wavesurfer.setVolume(0.5);
};

const muteVolume = () => {
  state.volume = 0;
  wavesurfer.setVolume(0);
};

const volumeIt = (e) => {
  wavesurfer.setVolume(e.target.value / 100);
};

onMounted(() => {
  wavesurfer = WaveSurfer.create({
    container: waveform.value,
    height: 64,
    backend: "MediaElementWebAudio",
    cursorWidth: 0,
    mediaControls: props.useControls,
    hideScrollbar: true,
    plugins: [
      WaveCursor.create({
        showTime: true,
        opacity: 1,
        customShowTimeStyle: {
          "background-color": "#374151",
          color: "#fff",
          padding: "3px",
          "font-size": "12px",
        },
      }),
    ],
    waveColor: "#f59e0b",
    progressColor: "#b45309",
    // cursorColor: 'transparent',
  });
  // document.querySelectorAll("audio")[0].setAttribute("controlsList", "nodownload noplaybackrate");

  wavesurfer.load(props.src);
  // waveform.value
  //  .getElementsByTagName("audio")[0]
  //  .setAttribute("controlsList", "nodownload noplaybackrate");
  if (props.useEqualizer) {
    wavesurfer.on("ready", function () {
      let EQ = [
        {
          f: 32,
          type: "lowshelf",
        },
        {
          f: 64,
          type: "peaking",
        },
        {
          f: 125,
          type: "peaking",
        },
        {
          f: 250,
          type: "peaking",
        },
        {
          f: 500,
          type: "peaking",
        },
        {
          f: 1000,
          type: "peaking",
        },
        {
          f: 2000,
          type: "peaking",
        },
        {
          f: 4000,
          type: "peaking",
        },
        {
          f: 8000,
          type: "peaking",
        },
        {
          f: 16000,
          type: "highshelf",
        },
      ];
      let filters = EQ.map(function (band) {
        let filter = wavesurfer.backend.ac.createBiquadFilter();
        filter.type = band.type;
        filter.gain.value = 0;
        filter.Q.value = 1;
        filter.frequency.value = band.f;
        return filter;
      });

      // Connect filters to wavesurfer
      wavesurfer.backend.setFilters(filters);

      let container = equalform.value;
      filters.forEach(function (filter) {
        let input = document.createElement("input");
        Object.assign(input, {
          type: "range",
          min: -40,
          max: 40,
          value: 0,
          title: filter.frequency.value,
        });
        // input.style.display = "inline-block";
        input.setAttribute("orient", "vertical");
        /* wavesurfer.util.style(input, {
          webkitAppearance: "slider-vertical",
          width: "50px",
          height: "150px",
        }); */
        container.appendChild(input);

        let onChange = function (e) {
          filter.gain.value = ~~e.target.value;
        };

        input.addEventListener("input", onChange);
        input.addEventListener("change", onChange);
      });
    });
  }
});
</script>

<style lang="postcss">
#equalizer {
  @apply inline-flex -space-x-12;
}
#equalizer input {
  @apply appearance-none rounded-md bg-gray-200 outline-none transition -rotate-90 origin-center w-24 h-1 inline-block -translate-x-20;
}
#equalizer input::-webkit-slider-thumb {
  @apply appearance-none bg-amber-500 cursor-pointer w-4 h-4 rounded-full;
}
#volume {
  @apply appearance-none rounded-md bg-gray-100 outline-none transition;
}
#volume::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  @apply bg-amber-500;
  cursor: pointer;
}
</style>
