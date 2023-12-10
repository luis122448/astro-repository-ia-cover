<Fragment>
<table class="table-auto text-left min-w-full divide-y-2 divide-gray-500/50">
<thead class="">
<tr class="text-gray-300 text-sm font-light">
<th class="px-4 py-2"></th>
<th class="px-4 py-2"></th>
<th class="px-4 py-2"></th>
<th class="px-4 py-2"></th>
</tr>
</thead>
<tbody>
{songs.map((song, index) => (
<Fragment><tr class="text-gray-300 text-sm font-light hover:bg-white/10 rounded-lg overflow-hidden">
<td class="px-4 py-2">{index + 1}</td>
<td class="px-4 py-2 flex gap-3">
<picture>
<img src={song.image} alt={song.title} class="W-11 h-11" />
</picture>
<div>
<h3>{song.title}</h3>
<span>{song.artists.join(", ")}</span>
</div>
</td>
<td class="px-4 py-2">{song.album}</td>
<td class="px-4 py-2">{song.duration}</td>
</tr></Fragment>
))}
</tbody>
</table>
</Fragment>;
