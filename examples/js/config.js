/**
 * classic 示例配置文件：包含示例的分类、名称、缩略图、文件路径
 */
var identification = {
    name: "iClient Classic"
};

var exampleConfig = {
    "baseDemo": {
        name: "官方示例",
        name_en: "baseDemo",
        content: {
            "mapDemo": {
                name: "地图示例",
                name_en: "mapDemo",
                content: [
                    {"name":"ArcGIS 地图","name_en":"","thumbnail":"basic_arcgis.png","fileName":"basic_arcgis","page":"basic_arcgis.html"},
                    {"name":"百度地图","name_en":"","thumbnail":"basic_baidu.png","fileName":"basic_baidu","page":"basic_baidu.html"},
                    {"name":"Bing地图","name_en":"","thumbnail":"basic_bing.png","fileName":"basic_bing","page":"basic_bing.html"},
                    {"name":"高德影像","name_en":"","thumbnail":"basic_gaode_img.png","fileName":"basic_gaode_img","page":"basic_gaode_img.html"},
                    {"name":"高德矢量","name_en":"","thumbnail":"basic_gaode_vec.png","fileName":"basic_gaode_vec","page":"basic_gaode_vec.html"},
                    {"name":"谷歌地球","name_en":"","thumbnail":"basic_google_earth_enterprise.png","fileName":"basic_google_earth_enterprise","page":"basic_google_earth_enterprise.html"},
                    {"name":"谷歌影像","name_en":"","thumbnail":"basic_google_img.png","fileName":"basic_google_img","page":"basic_google_img.html"},
                    {"name":"谷歌矢量","name_en":"","thumbnail":"basic_google_vec.png","fileName":"basic_google_vec","page":"basic_google_vec.html"},
                    {"name":"场景初始化","name_en":"","thumbnail":"basic_map.png","fileName":"basic_map","page":"basic_map.html"},
                    {"name":"Mapbox地图","name_en":"","thumbnail":"basic_mapbox.png","fileName":"basic_mapbox","page":"basic_mapbox.html"},
                    {"name":"图层参数调整","name_en":"","thumbnail":"basic_map_adjustment.png","fileName":"basic_map_adjustment","page":"basic_map_adjustment.html"},
                    {"name":"地图widget","name_en":"","thumbnail":"basic_map_widget.png","fileName":"basic_map_widget","page":"basic_map_widget.html"},
                    {"name":"OSM地图","name_en":"","thumbnail":"basic_osm.png","fileName":"basic_osm","page":"basic_osm.html"},
                    {"name":"天地图影像","name_en":"","thumbnail":"basic_tdt_img.png","fileName":"basic_tdt_img","page":"basic_tdt_img.html"},
                    {"name":"天地图矢量","name_en":"","thumbnail":"basic_tdt_vec.png","fileName":"basic_tdt_vec","page":"basic_tdt_vec.html"},
                    {"name":"腾讯地图","name_en":"","thumbnail":"basic_tencent.png","fileName":"basic_tencent","page":"basic_tencent.html"},

                ]
            },
            "terrainDemo": {
                name: "地形示例",
                name_en: "terrainDemo",
                content: [
                    {"name":"地形","name_en":"","thumbnail":"terrain.png","fileName":"terrain","page":"terrain.html"},
                    {"name":"ArcGIS地形","name_en":"","thumbnail":"terrain_arcgis.png","fileName":"terrain_arcgis","page":"terrain_arcgis.html"},
                    {"name":"世界地形","name_en":"","thumbnail":"terrain_cesium_world_terrain.png","fileName":"terrain_cesium_world_terrain","page":"terrain_cesium_world_terrain.html"},
                    {"name":"地形剖切","name_en":"","thumbnail":"terrain_clipping_planes.png","fileName":"terrain_clipping_planes","page":"terrain_clipping_planes.html"},
                    {"name":"地形夸张","name_en":"","thumbnail":"terrain_exaggeration.png","fileName":"terrain_exaggeration","page":"terrain_exaggeration.html"},

                ]
            },
            "mapControlDemo": {
                name: "地图控件示例",
                name_en: "mapControlDemo",
                content: [
                    {"name":"时钟","name_en":"","thumbnail":"control_animation.png","fileName":"control_animation","page":"control_animation.html"},
                    {"name":"底图选择","name_en":"","thumbnail":"control_baseLayerPicker.png","fileName":"control_baseLayerPicker","page":"control_baseLayerPicker.html"},
                    {"name":"全屏","name_en":"","thumbnail":"control_fullscreenButton.png","fileName":"control_fullscreenButton","page":"control_fullscreenButton.html"},
                    {"name":"地理编码","name_en":"","thumbnail":"control_geocoder.png","fileName":"control_geocoder","page":"control_geocoder.html"},
                    {"name":"自定义地理编码","name_en":"","thumbnail":"control_geocoder_custom.png","fileName":"control_geocoder_custom","page":"control_geocoder_custom.html"},
                    {"name":"主视图","name_en":"","thumbnail":"control_homeButton.png","fileName":"control_homeButton","page":"control_homeButton.html"},
                    {"name":"导航帮助","name_en":"","thumbnail":"control_navigationHelpButton.png","fileName":"control_navigationHelpButton","page":"control_navigationHelpButton.html"},
                    {"name":"场景模式","name_en":"","thumbnail":"control_sceneModePicker.png","fileName":"control_sceneModePicker","page":"control_sceneModePicker.html"},
                    {"name":"时间轴","name_en":"","thumbnail":"control_timeline.png","fileName":"control_timeline","page":"control_timeline.html"},
                    {"name":"VR","name_en":"","thumbnail":"control_vrButton.png","fileName":"control_vrButton","page":"control_vrButton.html"},

                ]
            },
            "sceneDemo": {
                name: "场景设置示例",
                name_en: "sceneDemo",
                content: [
                    {"name":"相机","name_en":"","thumbnail":"scene_camera.png","fileName":"scene_camera","page":"scene_camera.html"},
                    {"name":"相机教程","name_en":"","thumbnail":"scene_camera_tutorial.png","fileName":"scene_camera_tutorial","page":"scene_camera_tutorial.html"},
                    {"name":"切分地图","name_en":"","thumbnail":"scene_cartographic_limit_rectangle.png","fileName":"scene_cartographic_limit_rectangle","page":"scene_cartographic_limit_rectangle.html"},
                    {"name":"时钟","name_en":"","thumbnail":"scene_clock.png","fileName":"scene_clock","page":"scene_clock.html"},
                    {"name":"根据距离显示状态","name_en":"","thumbnail":"scene_distance_display_conditions.png","fileName":"scene_distance_display_conditions","page":"scene_distance_display_conditions.html"},
                    {"name":"地形上绘制","name_en":"","thumbnail":"scene_drawing_on_terrain.png","fileName":"scene_drawing_on_terrain","page":"scene_drawing_on_terrain.html"},
                    {"name":"地面大气","name_en":"","thumbnail":"scene_ground_atmosphere.png","fileName":"scene_ground_atmosphere","page":"scene_ground_atmosphere.html"},
                    {"name":"相机参数","name_en":"","thumbnail":"scene_heading_pitch_roll.png","fileName":"scene_heading_pitch_roll","page":"scene_heading_pitch_roll.html"},
                    {"name":"基于图像的照明","name_en":"","thumbnail":"scene_image_based_lighting.png","fileName":"scene_image_based_lighting","page":"scene_image_based_lighting.html"},
                    {"name":"图层透明度","name_en":"","thumbnail":"scene_imagery_color_to_alpha.png","fileName":"scene_imagery_color_to_alpha","page":"scene_imagery_color_to_alpha.html"},
                    {"name":"检查器","name_en":"","thumbnail":"scene_inspector.png","fileName":"scene_inspector","page":"scene_inspector.html"},
                    {"name":"固定坐标","name_en":"","thumbnail":"scene_localToFixedFrame.png","fileName":"scene_localToFixedFrame","page":"scene_localToFixedFrame.html"},
                    {"name":"视图同步","name_en":"","thumbnail":"scene_multiple_synced_views.png","fileName":"scene_multiple_synced_views","page":"scene_multiple_synced_views.html"},
                    {"name":"离线部署","name_en":"","thumbnail":"scene_offline.png","fileName":"scene_offline","page":"scene_offline.html"},
                    {"name":"场景选择","name_en":"","thumbnail":"scene_picking.png","fileName":"scene_picking","page":"scene_picking.html"},
                    {"name":"投影","name_en":"","thumbnail":"scene_projection.png","fileName":"scene_projection","page":"scene_projection.html"},
                    {"name":"渲染性能","name_en":"","thumbnail":"scene_rendering_performance.png","fileName":"scene_rendering_performance","page":"scene_rendering_performance.html"},
                    {"name":"分辨率缩放","name_en":"","thumbnail":"resolution_scaling.png","fileName":"resolution_scaling","page":"resolution_scaling.html"},
                    {"name":"旋转2D地图","name_en":"","thumbnail":"scene_rotatable_2d_map.png","fileName":"scene_rotatable_2d_map","page":"scene_rotatable_2d_map.html"},
                    {"name":"阴影","name_en":"","thumbnail":"scene_shadows.png","fileName":"scene_shadows","page":"scene_shadows.html"},
                    {"name":"天空大气","name_en":"","thumbnail":"scene_sky_atmosphere.png","fileName":"scene_sky_atmosphere","page":"scene_sky_atmosphere.html"},

                ]
            },
            "czmlDemo": {
                name: "CZML示例",
                name_en: "czmlDemo",
                content: [
                    {"name":"billboard and label","name_en":"","thumbnail":"czml_billboard_label.png","fileName":"czml_billboard_label","page":"czml_billboard_label.html"},
                    {"name":"box","name_en":"","thumbnail":"czml_box.png","fileName":"czml_box","page":"czml_box.html"},
                    {"name":"circle and ellipses","name_en":"","thumbnail":"czml_circles_ellipses.png","fileName":"czml_circles_ellipses","page":"czml_circles_ellipses.html"},
                    {"name":"color","name_en":"","thumbnail":"czml_colors.png","fileName":"czml_colors","page":"czml_colors.html"},
                    {"name":"cone and cylinders","name_en":"","thumbnail":"czml_cones_cylinders.png","fileName":"czml_cones_cylinders","page":"czml_cones_cylinders.html"},
                    {"name":"corridor","name_en":"","thumbnail":"czml_corridor.png","fileName":"czml_corridor","page":"czml_corridor.html"},
                    {"name":"自定义属性","name_en":"","thumbnail":"czml_custom_properties.png","fileName":"czml_custom_properties","page":"czml_custom_properties.html"},
                    {"name":"model","name_en":"","thumbnail":"czml_model.png","fileName":"czml_model","page":"czml_model.html"},
                    {"name":"模型结合","name_en":"","thumbnail":"czml_model_articulations.png","fileName":"czml_model_articulations","page":"czml_model_articulations.html"},
                    {"name":"模型节点变化","name_en":"","thumbnail":"czml_model_node_transformations.png","fileName":"czml_model_node_transformations","page":"czml_model_node_transformations.html"},
                    {"name":"多部分","name_en":"","thumbnail":"czml_multi_part.png","fileName":"czml_multi_part","page":"czml_multi_part.html"},
                    {"name":"path","name_en":"","thumbnail":"czml_path.png","fileName":"czml_path","page":"czml_path.html"},
                    {"name":"point","name_en":"","thumbnail":"czml_point.png","fileName":"czml_point","page":"czml_point.html"},
                    {"name":"动态点","name_en":"","thumbnail":"czml_point_time_dynamic.png","fileName":"czml_point_time_dynamic","page":"czml_point_time_dynamic.html"},
                    {"name":"polygon","name_en":"","thumbnail":"czml_polygon.png","fileName":"czml_polygon","page":"czml_polygon.html"},
                    {"name":"polygon差值参考","name_en":"","thumbnail":"czml_polygon_interpolating_references.png","fileName":"czml_polygon_interpolating_references","page":"czml_polygon_interpolating_references.html"},
                    {"name":"polygon时态","name_en":"","thumbnail":"czml_polygon_intervals_availability.png","fileName":"czml_polygon_intervals_availability","page":"czml_polygon_intervals_availability.html"},
                    {"name":"polyline","name_en":"","thumbnail":"czml_polyline.png","fileName":"czml_polyline","page":"czml_polyline.html"},
                    {"name":"位置定义","name_en":"","thumbnail":"czml_position_definitions.png","fileName":"czml_position_definitions","page":"czml_position_definitions.html"},
                    {"name":"rectangle","name_en":"","thumbnail":"czml_rectangle.png","fileName":"czml_rectangle","page":"czml_rectangle.html"},
                    {"name":"参考属性","name_en":"","thumbnail":"czml_reference_properties.png","fileName":"czml_reference_properties","page":"czml_reference_properties.html"},
                    {"name":"spheres and ellipsoids","name_en":"","thumbnail":"czml_spheres_ellipsoids.png","fileName":"czml_spheres_ellipsoids","page":"czml_spheres_ellipsoids.html"},
                    {"name":"wall","name_en":"","thumbnail":"czml_wall.png","fileName":"czml_wall","page":"czml_wall.html"},
                    {"name":"叠加层级","name_en":"","thumbnail":"czml_zIndex.png","fileName":"czml_zIndex","page":"czml_zIndex.html"},

                ]
            },
            "dataSourcesDemo": {
                name: "dataSources示例",
                name_en: "dataSourcesDemo",
                content: [
                    {"name":"自定义数据源","name_en":"","thumbnail":"dataSource_custom.png","fileName":"dataSource_custom","page":"dataSource_custom.html"},
                    {"name":"CZML数据源","name_en":"","thumbnail":"dataSource_czml.png","fileName":"dataSource_czml","page":"dataSource_czml.html"},
                    {"name":"GeoJosn样式","name_en":"","thumbnail":"dataSource_geoJson_simplestyle.png","fileName":"dataSource_geoJson_simplestyle","page":"dataSource_geoJson_simplestyle.html"},
                    {"name":"GeoJson数据源","name_en":"","thumbnail":"dataSource_geoJson_topoJson.png","fileName":"dataSource_geoJson_topoJson","page":"dataSource_geoJson_topoJson.html"},
                    {"name":"Kml数据源","name_en":"","thumbnail":"dataSource_kml.png","fileName":"dataSource_kml","page":"dataSource_kml.html"},
                    {"name":"Kml导出","name_en":"","thumbnail":"dataSource_kml_export.png","fileName":"dataSource_kml_export","page":"dataSource_kml_export.html"},
                    {"name":"动态Kml数据源","name_en":"","thumbnail":"dataSource_kml_tours.png","fileName":"dataSource_kml_tours","page":"dataSource_kml_tours.html"},
                    {"name":"多种数据源","name_en":"","thumbnail":"dataSource_multi_part.png","fileName":"dataSource_multi_part","page":"dataSource_multi_part.html"},
                    {"name":"组合数据源","name_en":"","thumbnail":"dataSource_ordering.png","fileName":"dataSource_ordering","page":"dataSource_ordering.html"},

                ]
            },
            "geometriesDemo": {
                name: "几何图形(entity)示例",
                name_en: "mouseDemo",
                content:[
                    {"name":"外观","name_en":"","thumbnail":"geometry_appearances.png","fileName":"geometry_appearances","page":"geometry_appearances.html"},
                    {"name":"billboard","name_en":"","thumbnail":"geometry_billboard.png","fileName":"geometry_billboard","page":"geometry_billboard.html"},
                    {"name":"box","name_en":"","thumbnail":"geometry_box.png","fileName":"geometry_box","page":"geometry_box.html"},
                    {"name":"circle and ellipses","name_en":"","thumbnail":"geometry_circle_ellipses.png","fileName":"geometry_circle_ellipses","page":"geometry_circle_ellipses.html"},
                    {"name":"corridor","name_en":"","thumbnail":"geometry_corridor.png","fileName":"geometry_corridor","page":"geometry_corridor.html"},
                    {"name":"cylinder and cones","name_en":"","thumbnail":"geometry_cylinder_cones.png","fileName":"geometry_cylinder_cones","page":"geometry_cylinder_cones.html"},
                    {"name":"高度参考","name_en":"","thumbnail":"geometry_height_reference.png","fileName":"geometry_height_reference","page":"geometry_height_reference.html"},
                    {"name":"label","name_en":"","thumbnail":"geometry_label.png","fileName":"geometry_label","page":"geometry_label.html"},
                    {"name":"动态label","name_en":"","thumbnail":"geometry_labels_sdf.png","fileName":"geometry_labels_sdf","page":"geometry_labels_sdf.html"},
                    {"name":"pins","name_en":"","thumbnail":"geometry_map_pins.png","fileName":"geometry_map_pins","page":"geometry_map_pins.html"},
                    {"name":"model","name_en":"","thumbnail":"geometry_models.png","fileName":"geometry_models","page":"geometry_models.html"},
                    {"name":"模型颜色","name_en":"","thumbnail":"geometry_models_coloring.png","fileName":"geometry_models_coloring","page":"geometry_models_coloring.html"},
                    {"name":"部分椭球体","name_en":"","thumbnail":"geometry_partial_ellipsoids.png","fileName":"geometry_partial_ellipsoids","page":"geometry_partial_ellipsoids.html"},
                    {"name":"plane","name_en":"","thumbnail":"geometry_plane.png","fileName":"geometry_plane","page":"geometry_plane.html"},
                    {"name":"point","name_en":"","thumbnail":"geometry_point.png","fileName":"geometry_point","page":"geometry_point.html"},
                    {"name":"polygon","name_en":"","thumbnail":"geometry_polygon.png","fileName":"geometry_polygon","page":"geometry_polygon.html"},
                    {"name":"polyline","name_en":"","thumbnail":"geometry_polyline.png","fileName":"geometry_polyline","page":"geometry_polyline.html"},
                    {"name":"polyline dash","name_en":"","thumbnail":"geometry_polyline_dash.png","fileName":"geometry_polyline_dash","page":"geometry_polyline_dash.html"},
                    {"name":"polyline volume","name_en":"","thumbnail":"geometry_polyline_volume.png","fileName":"geometry_polyline_volume","page":"geometry_polyline_volume.html"},
                    {"name":"rectangle","name_en":"","thumbnail":"geometry_rectangle.png","fileName":"geometry_rectangle","page":"geometry_rectangle.html"},
                    {"name":"spheres and ellipsoids","name_en":"","thumbnail":"geometry_spheres_ellipsoids.png","fileName":"geometry_spheres_ellipsoids","page":"geometry_spheres_ellipsoids.html"},
                    {"name":"wall","name_en":"","thumbnail":"geometry_wall.png","fileName":"geometry_wall","page":"geometry_wall.html"},
                    {"name":"几何图形叠加层级","name_en":"","thumbnail":"geometry_zIndex.png","fileName":"geometry_zIndex","page":"geometry_zIndex.html"},

                ]
            },
            "3DTilesDemo": {
                name: "3DTiles示例",
                name_en: "3DTilesDemo",
                content: [
                    {"name":"调整高度","name_en":"","thumbnail":"3dTiles_adjust_height.png","fileName":"3dTiles_adjust_height","page":"3dTiles_adjust_height.html"},
                    {"name":"要素层次","name_en":"","thumbnail":"3dTiles_batch_table_hierarchy.png","fileName":"3dTiles_batch_table_hierarchy","page":"3dTiles_batch_table_hierarchy.html"},
                    {"name":"BIM数据","name_en":"","thumbnail":"3dTiles_bim.png","fileName":"3dTiles_bim","page":"3dTiles_bim.html"},
                    {"name":"贴切片","name_en":"","thumbnail":"3dTiles_clamp_to_tile.png","fileName":"3dTiles_clamp_to_tile","page":"3dTiles_clamp_to_tile.html"},
                    {"name":"剖切平面","name_en":"","thumbnail":"3dTiles_clipping_planes.png","fileName":"3dTiles_clipping_planes","page":"3dTiles_clipping_planes.html"},
                    {"name":"要素选择","name_en":"","thumbnail":"3dTiles_feature_picking.png","fileName":"3dTiles_feature_picking","page":"3dTiles_feature_picking.html"},
                    {"name":"要素样式","name_en":"","thumbnail":"3dTiles_feature_styling.png","fileName":"3dTiles_feature_styling","page":"3dTiles_feature_styling.html"},
                    {"name":"数据格式","name_en":"","thumbnail":"3dTiles_formats.png","fileName":"3dTiles_formats","page":"3dTiles_formats.html"},
                    {"name":"检查器","name_en":"","thumbnail":"3dTiles_inspector.png","fileName":"3dTiles_inspector","page":"3dTiles_inspector.html"},
                    {"name":"差值","name_en":"","thumbnail":"3dTiles_interactivity.png","fileName":"3dTiles_interactivity","page":"3dTiles_interactivity.html"},
                    {"name":"室内三维","name_en":"","thumbnail":"3dTiles_interior.png","fileName":"3dTiles_interior","page":"3dTiles_interior.html"},
                    {"name":"倾斜摄影测量测量","name_en":"","thumbnail":"3dTiles_photogrammetry.png","fileName":"3dTiles_photogrammetry","page":"3dTiles_photogrammetry.html"},
                    {"name":"倾斜摄影测量测量分类","name_en":"","thumbnail":"3dTiles_photogrammetry_classification.png","fileName":"3dTiles_photogrammetry_classification","page":"3dTiles_photogrammetry_classification.html"},
                    {"name":"点云数据","name_en":"","thumbnail":"3dTiles_point_cloud.png","fileName":"3dTiles_point_cloud","page":"3dTiles_point_cloud.html"},
                    {"name":"点云分类","name_en":"","thumbnail":"3dTiles_point_cloud_classification.png","fileName":"3dTiles_point_cloud_classification","page":"3dTiles_point_cloud_classification.html"},
                    {"name":"点云阴影","name_en":"","thumbnail":"3dTiles_point_cloud_shading.png","fileName":"3dTiles_point_cloud_shading","page":"3dTiles_point_cloud_shading.html"},
                    {"name":"点云样式","name_en":"","thumbnail":"3dTiles_point_cloud_styling.png","fileName":"3dTiles_point_cloud_styling","page":"3dTiles_point_cloud_styling.html"},
                    {"name":"动态点云","name_en":"","thumbnail":"3dTiles_point_cloud_time_dynamic.png","fileName":"3dTiles_point_cloud_time_dynamic","page":"3dTiles_point_cloud_time_dynamic.html"},
                    {"name":"根据切片获取高度","name_en":"","thumbnail":"3dTiles_simple_height_from_tile.png","fileName":"3dTiles_simple_height_from_tile","page":"3dTiles_simple_height_from_tile.html"},
                    {"name":"地形分类","name_en":"","thumbnail":"3dTiles_terrain_classification.png","fileName":"3dTiles_terrain_classification","page":"3dTiles_terrain_classification.html"},
                    {"name":"BIM场景线","name_en":"","thumbnail":"3dTiles_with_polyline.png","fileName":"3dTiles_with_polyline","page":"3dTiles_with_polyline.html"},

                ]
            },
            "ionDemo": {
                name: "Cesium Ion示例",
                name_en: "ionDemo",
                content: [
                    {"name":"极地DEM","name_en":"","thumbnail":"ion_arcticDEM.png","fileName":"ion_arcticDEM","page":"ion_arcticDEM.html"},
                    {"name":"深蓝地图","name_en":"","thumbnail":"ion_blueMarble.png","fileName":"ion_blueMarble","page":"ion_blueMarble.html"},
                    {"name":"夜间地图","name_en":"","thumbnail":"ion_earth_at_night.png","fileName":"ion_earth_at_night","page":"ion_earth_at_night.html"},
                    {"name":"蒙特利尔点云","name_en":"","thumbnail":"ion_montreal_point_cloud.png","fileName":"ion_montreal_point_cloud","page":"ion_montreal_point_cloud.html"},
                    {"name":"Natural EarthII地图","name_en":"","thumbnail":"ion_natural_earth_II.png","fileName":"ion_natural_earth_II","page":"ion_natural_earth_II.html"},
                    {"name":"PAPMP地形","name_en":"","thumbnail":"ion_PAMAP_terrain.png","fileName":"ion_PAMAP_terrain","page":"ion_PAMAP_terrain.html"},
                    {"name":"Sentinel地图","name_en":"","thumbnail":"ion_sentinel2.png","fileName":"ion_sentinel2","page":"ion_sentinel2.html"},
                    {"name":"华盛顿特区","name_en":"","thumbnail":"ion_washington_DC.png","fileName":"ion_washington_DC","page":"ion_washington_DC.html"},
                    {"name":"世界地形","name_en":"","thumbnail":"ion_world_terrain.png","fileName":"ion_world_terrain","page":"ion_world_terrain.html"},

                ]
            },
            "postDemo": {
                name: "后期处理示例",
                name_en: "postDemo",
                content: [
                    {"name":"环境光遮挡","name_en":"","thumbnail":"processing_ambient_occlusion.png","fileName":"processing_ambient_occlusion","page":"processing_ambient_occlusion.html"},
                    {"name":"bloom","name_en":"","thumbnail":"processing_bloom.png","fileName":"processing_bloom","page":"processing_bloom.html"},
                    {"name":"自定义单要素处理","name_en":"","thumbnail":"processing_custom_per_feature_post_process.png","fileName":"processing_custom_per_feature_post_process","page":"processing_custom_per_feature_post_process.html"},
                    {"name":"自定义后期处理","name_en":"","thumbnail":"processing_custom_post_process.png","fileName":"processing_custom_post_process","page":"processing_custom_post_process.html"},
                    {"name":"视野深度","name_en":"","thumbnail":"processing_depth_of_field.png","fileName":"processing_depth_of_field","page":"processing_depth_of_field.html"},
                    {"name":"快速近似抗锯齿","name_en":"","thumbnail":"processing_fxaa.png","fileName":"processing_fxaa","page":"processing_fxaa.html"},
                    {"name":"高曝光动态范围","name_en":"","thumbnail":"processing_high_dynamic_range.png","fileName":"processing_high_dynamic_range","page":"processing_high_dynamic_range.html"},
                    {"name":"透镜光照","name_en":"","thumbnail":"processing_lensFlare.png","fileName":"processing_lensFlare","page":"processing_lensFlare.html"},
                    {"name":"单要素后期处理","name_en":"","thumbnail":"processing_per_feature_post_processing.png","fileName":"processing_per_feature_post_processing","page":"processing_per_feature_post_processing.html"},
                    {"name":"后期处理","name_en":"","thumbnail":"processing_post_processing.png","fileName":"processing_post_processing","page":"processing_post_processing.html"},

                ]
            },
            "particleSystemDemo": {
                name: "粒子系统示例",
                name_en: "particleSystemDemo",
                content: [
                    {"name":"粒子系统","name_en":"","thumbnail":"particle_system.png","fileName":"particle_system"},
                    {"name":"粒子系统(新)","name_en":"","thumbnail":"particle_system_new.png","fileName":"particle_system_new"},
                    {"name":"烟花","name_en":"","thumbnail":"particle_system_fireworks.png","fileName":"particle_system_fireworks"},
                    {"name":"尾迹线","name_en":"","thumbnail":"particle_system_tails.png","fileName":"particle_system_tails"},
                    {"name":"天气","name_en":"","thumbnail":"particle_system_weather.png","fileName":"particle_system_weather"},

                ]
            },
            "materialsDemo": {
                name: "材质示例",
                name_en: "materialsDemo",
                content: [
                    {"name":"材质","name_en":"","thumbnail":"materials.png","fileName":"materials"},
                    {"name":"全球材质","name_en":"","thumbnail":"materials_globe.png","fileName":"materials_globe"},
                    {"name":"基于物理的材质","name_en":"","thumbnail":"materials_physically_based.png","fileName":"materials_physically_based"},

                ]
            },
            "ogcDemo": {
                name: "OGC服务示例",
                name_en: "ogcDemo",
                content: [{
                    name: "WMS服务",
                    name_en: "lonAndLatLocation",
                    thumbnail: "ogc_wms.png",
                    fileName: "ogc_wms"
                }, {
                    name: "WMTS服务",
                    name_en: "lonAndLatLocation",
                    thumbnail: "ogc_wmts.png",
                    fileName: "ogc_wmts"
                }]
            },
            "otherDemo": {
                name: "其他示例",
                name_en: "otherDemo",
                content: [
                    {"name":"回调属性","name_en":"","thumbnail":"other_callback_property.png","fileName":"other_callback_property","page":"other_callback_property.html"},
                    {"name":"虚拟VR","name_en":"","thumbnail":"other_cardboard.png","fileName":"other_cardboard","page":"other_cardboard.html"},
                    {"name":"贴模型","name_en":"","thumbnail":"other_clamp_to_3d_model.png","fileName":"other_clamp_to_3d_model","page":"other_clamp_to_3d_model.html"},
                    {"name":"贴地形","name_en":"","thumbnail":"other_clamp_to_terrain.png","fileName":"other_clamp_to_terrain","page":"other_clamp_to_terrain.html"},
                    {"name":"贴切片","name_en":"","thumbnail":"3dTiles_clamp_to_tile.png","fileName":"3dTiles_clamp_to_tile","page":"3dTiles_clamp_to_tile.html"},
                    {"name":"分类","name_en":"","thumbnail":"other_classification.png","fileName":"other_classification","page":"other_classification.html"},
                    {"name":"多类型分类","name_en":"","thumbnail":"other_classification_types.png","fileName":"other_classification_types","page":"other_classification_types.html"},
                    {"name":"聚合","name_en":"","thumbnail":"other_clustering.png","fileName":"other_clustering","page":"other_clustering.html"},
                    {"name":"html叠加","name_en":"","thumbnail":"other_html_overlay.png","fileName":"other_html_overlay","page":"other_html_overlay.html"},
                    {"name":"ArcGIS Server服务","name_en":"","thumbnail":"other_imagery_arcgis_mapserver.png","fileName":"other_imagery_arcgis_mapserver","page":"other_imagery_arcgis_mapserver.html"},
                    {"name":"裁剪图形","name_en":"","thumbnail":"other_imagery_cutout.png","fileName":"other_imagery_cutout","page":"other_imagery_cutout.html"},
                    {"name":"影像图层","name_en":"","thumbnail":"other_imagery_layers.png","fileName":"other_imagery_layers","page":"other_imagery_layers.html"},
                    {"name":"图层管理","name_en":"","thumbnail":"other_imagery_layers_manipulation.png","fileName":"other_imagery_layers_manipulation","page":"other_imagery_layers_manipulation.html"},
                    {"name":"分屏","name_en":"","thumbnail":"other_imagery_layers_split.png","fileName":"other_imagery_layers_split","page":"other_imagery_layers_split.html"},
                    {"name":"材质过滤","name_en":"","thumbnail":"other_imagery_layers_texture_filters.png","fileName":"other_imagery_layers_texture_filters","page":"other_imagery_layers_texture_filters.html"},
                    {"name":"差值","name_en":"","thumbnail":"other_Interpolation.png","fileName":"other_Interpolation","page":"other_Interpolation.html"},
                    {"name":"显隐Entity","name_en":"","thumbnail":"other_show_or_hide_entities.png","fileName":"other_show_or_hide_entities","page":"other_show_or_hide_entities.html"},
                    {"name":"星爆式显示","name_en":"","thumbnail":"other_star_burst.png","fileName":"other_star_burst","page":"other_star_burst.html"},
                    {"name":"视频","name_en":"","thumbnail":"other_Video.png","fileName":"other_Video","page":"other_Video.html"},

                ]
            }
        }
    },
   

};
/**
 *key值：为exampleConfig配置的key值或者fileName值
 *      （为中间节点时是key值，叶结点是fileName值）
 *value值：fontawesome字体icon名
 *不分层
 */
var sideBarIconConfig = {
    "baseDemo": "fa-edit",
    "map": "fa-map-marker",
    "overlay": "fa-image",
    "control": "fa-cog",
    "popup": "fa-commenting-o",
    "query": "fa-search",
    "theme": " fa-area-chart",
    "analysis": "fa-leanpub",
    "viz": "fa-map",
    "OGC": "fa fa-globe",
    // "plot": "fa-edit",
    "others": "fa-th-large"
};

/**
 *key值：为exampleConfig配置的key值
 *value值：fontawesome字体icon名
 *与sideBarIconConfig的区别：sideBarIconConfig包括侧边栏所有层级目录的图标，exampleIconConfig仅包括一级标题的图标
 */
var exampleIconConfig = {
    "baseDemo": "fa-edit",
    "map": "fa-map-marker",
    "overlay": "fa-image",
    "control": "fa-cog",
    "popup": "fa-commenting-o",
    "query": "fa-search",
    "theme": " fa-area-chart",
    "analysis": "fa-leanpub",
    "viz": "fa-map",
    "OGC": "fa fa-globe",
    // "plot": "fa-edit",
    "others": "fa-th-large"
};
