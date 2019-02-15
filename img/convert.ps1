$Source = Get-ChildItem ".\*.png"
$DestinationA = ".\"


ForEach ($files in $Source) {
    cwebp $files -q 85 -m 6 -o $($DestinationA + $files.BaseName + ".webp")
}


$Source2 = Get-ChildItem ".\*.jpg"
$DestinationB = ".\"


ForEach ($files2 in $Source2) {
    cwebp $files2 -q 85 -m 6 -o $($DestinationB + $files2.BaseName + ".webp")
}
